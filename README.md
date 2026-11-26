# VRoid 捏人笔记

收集 VRoid Studio 捏人教学。一篇视频对应 `notes/<slug>/index.html`，关键帧用同目录的 jpg，嵌在步骤里。首页读 `js/catalog.js`。

笔记对照的 VRoid Studio 版本是 2.14.0。界面名称按软件里的中文标签写。

## 收一篇视频时

1. 原视频放进 `inbox/`，或只记路径。视频不进 git。
2. 用 ffmpeg 抽真正换了操作或换了造型的帧，压成宽不超过 1280 的 jpg，放进 `notes/<slug>/`。
3. 按 `notes/_template/index.html` 写步骤。每步写清点哪里、滑杆或按钮叫什么、往哪边调、画面说明什么。
4. 在 `js/catalog.js` 的 `notes` 里登记。`category` 用文件里已有的 id。

直接打开 `index.html` 就能看，不用起服务。免费且页面写明可商用的贴图在 `materials/index.html`，每条有预览图和原站图片链接。

## 目录

| 路径 | 内容 |
| --- | --- |
| `index.html` | 目录页 |
| `js/catalog.js` | 篇目登记 |
| `notes/<slug>/` | 一篇笔记和它的图 |
| `inbox/` | 待整理的原视频 |
