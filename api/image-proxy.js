export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    res.status(400).send("Missing image URL");
    return;
  }

  function normalizeUpstreamUrl(raw) {
    if (!raw || typeof raw !== "string") return "";

    let value = raw.trim();
    if (!value) return "";

    // 已经是完整链接
    if (/^https?:\/\//i.test(value)) return value;

    // 协议相对地址
    if (value.startsWith("//")) return "https:" + value;

    // NASA MMGIS M20 数据里的相对路径
    // 例如: Layers/mosaics/...
    if (value.startsWith("Layers/")) {
      return "https://mars.nasa.gov/mmgis-maps/M20/" + value;
    }

    // 站内绝对路径
    if (value.startsWith("/")) {
      return "https://mars.nasa.gov" + value;
    }

    // 常见 mars2020 资源路径
    if (
      value.startsWith("mars2020/") ||
      value.startsWith("system/") ||
      value.startsWith("images/") ||
      value.startsWith("raw_images/")
    ) {
      return "https://mars.nasa.gov/" + value.replace(/^\/+/, "");
    }

    return value;
  }

  const normalizedUrl = normalizeUpstreamUrl(url);

  if (!normalizedUrl) {
    res.status(400).send("Invalid image URL");
    return;
  }

  async function fetchImage(targetUrl) {
    return fetch(targetUrl, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "image/*,*/*;q=0.8"
      }
    });
  }

  try {
    let response = await fetchImage(normalizedUrl);
    let finalUrl = normalizedUrl;

    // 如果是 tif，自动尝试 jpg 回退
    if (
      (!response.ok || !(response.headers.get("content-type") || "").startsWith("image/")) &&
      /\.tif$/i.test(normalizedUrl)
    ) {
      const jpgUrl = normalizedUrl.replace(/\.tif$/i, ".jpg");
      const jpgResponse = await fetchImage(jpgUrl);

      if (jpgResponse.ok && (jpgResponse.headers.get("content-type") || "").startsWith("image/")) {
        response = jpgResponse;
        finalUrl = jpgUrl;
      }
    }

    if (!response.ok) {
      res.status(response.status).send("Failed to fetch upstream resource: " + finalUrl);
      return;
    }

    const contentType = response.headers.get("content-type") || "";

    if (!contentType.startsWith("image/")) {
      res.status(415).send("Upstream URL is not a direct image: " + finalUrl);
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.status(200).send(buffer);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
