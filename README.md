# PersExplorer — Mars Rover Dashboard  
# PersExplorer——火星车探索可视化面板

An interactive Mars exploration dashboard built with NASA/JPL Mars 2020 mission data.  
一个基于 NASA/JPL Mars 2020 任务公开数据构建的交互式火星探索可视化面板。

This project visualizes the Perseverance rover’s traverse in Jezero Crater through a 3D Mars globe, a 2D Jezero detail map, waypoint navigation, featured image stops, mission statistics, and terrain-derived analysis panels.  
本项目通过 3D 火星球体、Jezero 陨石坑 2D 细节地图、路径点导航、精选图像节点、任务统计和基于地形推导的分析面板，展示了毅力号火星车在 Jezero 陨石坑中的巡视路径。

---

## Overview  
## 项目概述

PersExplorer is a front-end data visualization project that transforms real Perseverance rover traverse data into an interactive exploration experience.  
PersExplorer 是一个前端数据可视化项目，它将真实的毅力号火星车巡视数据转化为可交互探索的网页体验。

The dashboard includes:  
该可视化面板包含以下内容：

- 3D Mars globe / 3D 火星球体
- 2D Jezero Crater detail view / Jezero 陨石坑 2D 细节视图
- Waypoint list based on real NASA mission data / 基于 NASA 真实任务数据的路径点列表
- Sol timeline with replay controls / 带回放控制的 Sol 时间轴
- Featured science and image stops / 精选科学与图像节点
- Mars surface image panel / 火星表面图像面板
- Elevation profile / 高程剖面图
- Drive distance and cumulative distance charts / 单次行驶距离与累计距离图表
- AI vs human drive planning comparison / AI 与人工驾驶规划对比
- Terrain roughness, slope, and DEM-style cross-section analysis / 地形粗糙度、坡度和类 DEM 剖面分析

---

## Live Demo  
## 在线演示

[View the dashboard / 查看面板](https://digital-mars.vercel.app)

---

## Data Sources  
## 数据来源

This project is based on publicly available NASA/JPL Mars 2020 mission data, including rover traverse waypoints, path geometry, and mission imagery context.  
本项目基于公开可获取的 NASA/JPL Mars 2020 任务数据，包括火星车巡视路径点、路径几何数据以及任务图像相关信息。

Main local data files used in this project:  
本项目主要使用的本地数据文件包括：

- `rover_points_full.geojson`
- `rover_path_full.geojson`
- `mars.jpg`
- `photos/`

---

## Features  
## 主要功能

### 1. Interactive Rover Traverse Visualization  
### 1. 火星车巡视路径交互可视化

- Explore Perseverance’s route across Jezero Crater  
  查看毅力号穿越 Jezero 陨石坑的巡视路线
- Switch between a 3D globe and a 2D Jezero detail map  
  在 3D 火星球体和 2D Jezero 细节地图之间切换
- Follow rover position through Sol-based replay  
  通过基于 Sol 的回放查看火星车位置变化

### 2. Featured Science Stops  
### 2. 精选科学节点

The dashboard highlights selected representative Sols as mission narrative anchors:  
该面板将若干具有代表性的 Sol 作为任务叙事锚点进行高亮展示：

- **Sol 23** — First Drive / 首次行驶
- **Sol 415** — Delta Approach / 接近三角洲前缘
- **Sol 632** — Delta Climb / 三角洲陡坡攀升
- **Sol 911** — Cliffs Sampling / 悬崖采样
- **Sol 1068** — Margin Unit / 边缘单元

These stops are used for visual storytelling and portfolio presentation rather than as a complete archival image system.  
这些节点主要用于任务叙事和作品集展示，而不是作为完整严格的图像档案系统。

### 3. Mission Analytics  
### 3. 任务分析模块

- Elevation profile / 高程剖面
- Drive distance per Sol / 每次行驶距离
- Cumulative traverse distance / 累计巡视距离
- AI vs human drive planning comparison / AI 与人工驾驶规划对比
- Terrain roughness and slope analysis along traverse / 沿路径的地形粗糙度与坡度分析

---

## Image Note  
## 图像说明

The image panel is intentionally curated for presentation.  
图像面板是为了展示效果而进行人工策划和筛选的。

Most featured images are grouped by representative Sol, but one exception should be noted clearly:  
大多数精选图像都按照代表性的 Sol 分组，但其中有一个需要特别说明的例外：

- `photos/sol1068_4.jpg` is **not actually from Sol 1068**  
  `photos/sol1068_4.jpg` **并不实际属于 Sol 1068**
- It is a **self-portrait image from Sol 46**  
  它实际上是一张来自 **Sol 46** 的自拍图像
- It is included in the Sol 1068 image set because it is one of the most iconic and representative Perseverance images  
  之所以被放入 Sol 1068 的图像组，是因为它是毅力号任务中最具代表性和辨识度的图像之一
- This choice was made for presentation and storytelling purposes  
  这样处理主要是出于展示和叙事目的

Therefore, this dashboard should be understood as a **mission visualization and portfolio project**, not as a strict one-to-one scientific image archive.  
因此，这个面板应被理解为一个**任务可视化与作品集项目**，而不是严格的一一对应科学图像档案系统。

---

## Project Structure  
## 项目结构

```text
digital-mars/
├── index.html
├── README.md
├── mars.jpg
├── rover_points_full.geojson
├── rover_path_full.geojson
├── vercel.json
└── photos/Tech Stack

技术栈
	•	HTML
	•	CSS
	•	JavaScript
	•	Three.js
	•	Canvas 2D
	•	GeoJSON
	•	Vercel for deployment / 使用 Vercel 部署

⸻

Purpose

项目目的

This project was created as a portfolio piece at the intersection of:
本项目被设计为一个位于以下几个方向交叉点上的作品集项目：
	•	Planetary science / 行星科学
	•	Remote sensing / 遥感
	•	Geospatial visualization / 地理空间可视化
	•	Scientific storytelling / 科学叙事
	•	Interactive web development / 交互式网页开发

It aims to present real Mars mission data in a form that is more accessible, exploratory, and visually engaging.
它的目标是以更易理解、更具探索性和更具视觉吸引力的方式呈现真实的火星任务数据。

⸻

Future Directions

后续拓展方向

Possible future extensions include:
未来可能的拓展方向包括：
	•	Higher-fidelity terrain integration using MOLA DEM
使用 MOLA DEM 融合更高精度的地形数据
	•	Stronger mission replay and event narration
更完整的任务回放与事件叙事
	•	Richer geological unit annotation
更丰富的地质单元标注
	•	Improved bilingual interface consistency
提升双语界面的一致性
	•	Expanded science-stop interpretation panels
扩展科学节点解读面板

⸻

Disclaimer

声明

This is an independent educational and portfolio project built using public mission data.
这是一个基于公开任务数据构建的独立教育与作品集项目。

It is not an official NASA or JPL product.
它不是 NASA 或 JPL 的官方产品。
