export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    res.status(400).send("Missing image URL");
    return;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      res.status(response.status).send("Failed to fetch image");
      return;
    }

    const contentType = response.headers.get("content-type");
    res.setHeader("Content-Type", contentType);

    const buffer = Buffer.from(await response.arrayBuffer());
    res.send(buffer);
  } catch (err) {
    res.status(500).send("Proxy error");
  }
}
