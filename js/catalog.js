// 每整理完一篇，在 notes 数组末尾加一条。
// slug 对应 notes/<slug>/index.html
// category 用下面 categories 里的 id
// cover 可省略；有的话写相对首页的路径，例如 notes/<slug>/01.jpg
window.VROID_NOTES = {
  categories: [
    { id: "face", label: "脸型" },
    { id: "eyes", label: "眼睛" },
    { id: "brows", label: "眉毛" },
    { id: "nose-mouth", label: "鼻与嘴" },
    { id: "ears", label: "耳朵" },
    { id: "hair", label: "头发" },
    { id: "body", label: "体型" },
    { id: "costume", label: "服装" },
    { id: "accessory", label: "配饰" },
    { id: "texture", label: "肤色与妆面" },
    { id: "photo", label: "摄影与导出" },
    { id: "other", label: "其他" }
  ],
  notes: [
    {
      slug: "dimensional-model",
      title: "让模型更显立体",
      category: "other",
      date: "2026-11-25",
      source: "【vroid】让模型更显立体 https://www.bilibili.com/video/BV1Rb411d7Xr/",
      summary: "同一套银发战术装，左边发白发平，右边靠脸上的明暗、头发边缘光和衣服高光显出体积。视频没有打开参数面板。",
      cover: "notes/dimensional-model/03.jpg"
    },
    {
      slug: "trace-overlay",
      title: "免安装穿透描图：把参考图叠在脸上",
      category: "face",
      date: "2026-11-25",
      source: "VRoid 捏脸救星！无需安装的“穿透描图”神器 (免费开源) https://www.bilibili.com/video/BV1ywqxBqEB2/",
      summary: "用免安装的 VRoid Reference Overlay 把参考图置顶盖在脸上，调透明度后锁定穿透，就能拖面部参数、在编辑纹理里描线。",
      cover: "notes/trace-overlay/06.jpg"
    },
    {
      slug: "anime-eye-highlights",
      title: "抛物面眼睛的视差、折射和多层高光",
      category: "eyes",
      date: "2026-11-25",
      source: "【Blender】李织烟 眼睛抛物面视差折射镜面高光 https://www.bilibili.com/video/BV17DbR6ZEmM/",
      summary: "Blender 成片把眼睛拆成浅抛物面、视差折射和几层不同颜色的高光。对照到 VRoid：眼睛略大，高光在贴图上分成两三层，不要堆在正中。",
      cover: "notes/anime-eye-highlights/02.jpg"
    },
    {
      slug: "gacha-illustration-frame",
      title: "随便一帧像手绘：战双模型的发、眼和侧面",
      category: "other",
      date: "2026-11-25",
      source: "现在的二游随便截一帧都是顶级手绘插画！ https://www.bilibili.com/video/BV1bq4q6oEi3/",
      summary: "不是捏人操作。用战双成图和 Blender 里的莱娅说明头发分层、睫毛、虹膜笔触、偏平的侧面，以及布料上的光。",
      cover: "notes/gacha-illustration-frame/03.jpg"
    },
    {
      slug: "vroid-anime-girl",
      title: "日漫双马尾女生：大眼、团子辫和系带短装",
      category: "hair",
      date: "2026-11-25",
      source: "使用VRoid轻松创建日漫二次元妹纸，太漂亮了~ https://www.bilibili.com/video/BV12K421C7xG/",
      summary: "按画面顺序记下这个日漫女生怎么收眼、铺刘海和团子辫，再补鼻影眼线、袖口系带和一点体型。头发占用的时间最长。",
      cover: "notes/vroid-anime-girl/16.jpg"
    },
    {
      slug: "better-face-texture",
      title: "在 Vroid 中制作更好的面部贴图",
      category: "texture",
      date: "2026-11-25",
      source: "在 Vroid 中制作更好的面部贴图！ https://www.bilibili.com/video/BV1yXa76kEpg/",
      summary: "删掉默认皮肤层后，在 Layer 1 上用浅底、一圈暗部和很浅的高光画出赛璐璐肤色，再把边缘模糊开。",
      cover: "notes/better-face-texture/14.jpg"
    },
    {
      slug: "full-model-course",
      title: "完整模型：五官、身体、衣服和头发",
      category: "other",
      date: "2026-11-25",
      source: "完整版【#VRoid studio】VRoid3D-模型制作 https://www.bilibili.com/video/BV1ZUyGBVEWF/",
      summary: "把一张设计稿做成整套模型：先画眼睛、眉毛、嘴和脸，再改体型、画身体皮肤和衣服，最后做头发、猫耳和护目镜。",
      cover: "notes/full-model-course/34.jpg"
    },
    {
      slug: "syafire-custom-clothes",
      title: "在 VRoid 里用底模贴图画自己的衣服",
      category: "costume",
      date: "2026-11-25",
      source: "How to Create Your Own Custom VTuber Clothes in VRoidStudio 【VTuber/Artist】 https://www.youtube.com/watch?v=BQiDzW9ozG8",
      summary: "在 VRoid Studio 0.11.1 里选 Onepiece (Long Sleeve) 底模，用橡皮把贴图擦透明来改出短上衣，再画上云朵；项圈画在 Body 的贴图上。画完不会改名，仍出现在 Tops 列表底部。",
      cover: "notes/syafire-custom-clothes/01.jpg"
    },
    {
      slug: "lucas-face-making",
      title: "LUCAS 的脸：粉绿虹膜、尖眼线和腮红",
      category: "face",
      date: "2026-11-25",
      source: "【#VRoid studio】VRoid3Dモデルメイキング/顔編【祝！書籍発売決定】 https://www.youtube.com/watch?v=BLi_FlDYVo4",
      summary: "在 VRoid Studio 1.24.1 里从默认脸改起，手绘粉绿虹膜和尖眼线，用乘算压眼白，再在皮肤上加阴影、腮红和鼻头高光，最后在表情里试口型。",
      cover: "notes/lucas-face-making/16.jpg"
    },
    {
      slug: "cel-shading-beginner",
      title: "新手在 VRoid 里做赛璐璐",
      category: "texture",
      date: "2026-11-25",
      source: "cel-shading in vroid for beginners! https://www.youtube.com/watch?v=u4i8FjqbLOw",
      summary: "先把边缘光关掉、自动阴影收硬，再平涂皮肤、重画虹膜和五官。头发用现成发型做成块面，最后在发际和脖子上手绘浅粉暗部。",
      cover: "notes/cel-shading-beginner/16.jpg"
    },
    {
      slug: "syafire-eye-textures",
      title: "自己画眼睛贴图：导出虹膜、剪贴上色再导回",
      category: "eyes",
      date: "2026-11-25",
      source: "How To Make Custom Eye Textures In VRoidStudio https://www.youtube.com/watch?v=rPpgUFDwr_o",
      summary: "把 VRoid 0.11 的虹膜默认图导出到 Photoshop，用剪贴蒙版在椭圆里铺绿、提亮并加上同侧高光，再导回 Irises，然后擦掉 Eye Highlights 上原来的高光。",
      cover: "notes/syafire-eye-textures/13.jpg"
    },
    {
      slug: "oc-face-texture",
      title: "异国剑士 p03 五官/脸部贴图",
      category: "texture",
      date: "2026-11-25",
      source: "【VRoid教程/画手向】如何让你的OC变成立体人 p03 五官/脸部贴图 https://www.bilibili.com/video/BV1yX4y1p7Zk/?p=3",
      summary: "自带笔刷画不出 OC 的五官时，用青夜小工具把瞳孔、眉毛、眼线、鼻子和皮肤链到 SAI，按立绘重画贴图，并关掉 Shader 颜色。这一集时长约 8 分 12 秒，对得上第 3 分 P。",
      cover: "notes/oc-face-texture/12.jpg"
    },
    {
      slug: "vr-show-hair-guide",
      title: "头发工具：分组、参数、骨骼和叠层",
      category: "hair",
      date: "2026-11-25",
      source: "VRoid Hair Tutorial ★ In-Depth Guide (Easy) https://www.youtube.com/watch?v=pKIuymaOVs8",
      summary: "在 VRoid Studio 0.11.3 里把头发编辑器按面板讲一遍：分组和四件工具、颜色贴图、截面曲线、骨骼，再把同一套校服头叠成双马尾。",
      cover: "notes/vr-show-hair-guide/18.jpg"
    },
    {
      slug: "lucas-lily-making",
      title: "LiLY：蓝瞳、银发和一套不对称制服",
      category: "other",
      date: "2026-11-25",
      source: "【#VRoid studio】VRoid3Dモデルメイキング映像【LiLY】 https://www.youtube.com/watch?v=Wv_dWpYoDa8",
      summary: "对着 Vsinger LiLY 的设计稿，在 VRoid Studio 1.26.3 里做整套模型。虹膜、链条和耳麦吊牌在 Clip Studio 里画，衣服拆开涂，麦克风用头发做。",
      cover: "notes/lucas-lily-making/26.jpg"
    },
    {
      slug: "cute-vroid-faces",
      title: "可爱 VRoid 脸：虹膜、眼睛、眉毛、阴影和参数",
      category: "face",
      date: "2026-11-25",
      source: "Tips For Making CUTE VRoid Faces [EASY] https://www.youtube.com/watch?v=cg_2qyG-MBU",
      summary: "自己画虹膜、高光、眉毛、眼线和脸上的阴影，再用虹膜间距、眼型、嘴唇和头宽把脸往可爱那边推。滑杆数字只记画面上读得到的。",
      cover: "notes/cute-vroid-faces/10.jpg"
    },
    {
      slug: "paper-clothes-body",
      title: "Paper朱 p04 VRoid 衣服+身体",
      category: "costume",
      date: "2026-11-25",
      source: "【Vroid教程】从零开始的二次元老婆/虚拟偶像全流程教程 p04 https://www.bilibili.com/video/BV19L4y157aS/?p=4",
      summary: "用喜多川校服当参考，在有限的衣服白模上把毛衣背心改成衬衫、领带和格裙，再按参考拉高、收肩并统一描边。",
      cover: "notes/paper-clothes-body/19.jpg"
    },
    {
      slug: "paper-face-makeup",
      title: "Paper朱 p02 VRoid 捏脸+妆面贴图",
      category: "face",
      date: "2026-11-25",
      source: "【Vroid教程】从零开始的二次元老婆/虚拟偶像全流程教程 p02 https://www.bilibili.com/video/BV19L4y157aS/?p=2",
      summary: "对照喜多川海梦的参考，在英文版 VRoid 1.5.0 里先收眼型、下巴和嘴，再把虹膜、眼线、睫毛和脸部 UV 拿到 SAI 里画完导回。这一集停在换发型之前。时长约 33 分钟，对得上第 2 分 P。",
      cover: "notes/paper-face-makeup/17.jpg"
    },
    {
      slug: "complex-outfit",
      title: "用相近版型叠出复杂裙子",
      category: "costume",
      date: "2026-11-25",
      source: "【Vroid3D】新手第一次竟然做复杂设的建模！超简单3d服装制作详解~全程带字幕 https://www.bilibili.com/video/BV1sF41137gf/",
      summary: "先在 VRoid 1.6.0 里选一条相近的短袖连衣裙，贴图拿到 SAI 里从里层和裙摆画起，领子和大衣用透明叠上去，鞋也画在贴图上。后半段打开头发的编辑骨骼，一键绑前发。成片约 11 分 47 秒。",
      cover: "notes/complex-outfit/01.jpg"
    },
    {
      slug: "oc-clothes-texture",
      title: "异国剑士 p05 衣服贴图",
      category: "costume",
      date: "2026-11-25",
      source: "【VRoid教程/画手向】如何让你的OC变成立体人 p05 衣服贴图 https://www.bilibili.com/video/BV1yX4y1p7Zk/?p=5",
      summary: "默认的制服内衬没有衬衫下摆，就加铅笔裙模板用橡皮擦裁出下摆，再用宵夜小工具把贴图和参考线导出，在 SAI 里用扭曲贴上领子、袖子、裤子和鞋子。蝴蝶结模板没有系带，另外加了一层领带。成片约 9 分 42 秒，对得上第 5 分 P。",
      cover: "notes/oc-clothes-texture/09.jpg"
    },
    {
      slug: "paper-hair",
      title: "Paper朱 p03 VRoid 头发",
      category: "hair",
      date: "2026-11-25",
      source: "【Vroid教程】从零开始的二次元老婆/虚拟偶像全流程教程 p03 https://www.bilibili.com/video/BV19L4y157aS/?p=3",
      summary: "从 Front 预设和 SAI 竖向渐变贴图做起，再在英文版 VRoid 1.5.0 里用自由发片的锚点、分组和黑白高光，对着参考收刘海、底发和后发。成片约 32 分钟，对得上第 3 分 P。",
      cover: "notes/paper-hair/15.jpg"
    },
    {
      slug: "oc-hair-export",
      title: "异国剑士 p08 逻辑头发组/头发骨骼/导出模型",
      category: "hair",
      date: "2026-11-25",
      source: "【VRoid教程/画手向】如何让你的OC变成立体人 p08 逻辑头发组/头发骨骼/导出模型 https://www.bilibili.com/video/BV1yX4y1p7Zk/?p=8",
      summary: "颅顶不够高时加一组逻辑头发组垫起来并补发缝，再按发势手动建骨骼组。摄影棚里用风看过之后导出 VRM。字幕说不要勾删除透明网格。成片 6 分 18 秒，对得上第 8 分 P。",
      cover: "notes/oc-hair-export/17.jpg"
    },
    {
      slug: "oc-hair-texture",
      title: "异国剑士 p07 头发贴图",
      category: "texture",
      date: "2026-11-25",
      source: "【VRoid教程/画手向】如何让你的OC变成立体人 p07 头发贴图 https://www.bilibili.com/video/BV1yX4y1p7Zk/?p=7",
      summary: "头发组已经是一串手绘组。先把材质改成后发2，导入 UV 棋盘格对位置，再把立绘里的后发导出到 SAI，用扭曲铺进色块。成片约 16 分 24 秒，对得上第 7 分 P。",
      cover: "notes/oc-hair-texture/18.jpg"
    },
    {
      slug: "zero-base-character",
      title: "零基础搭一个角色：从新建到导出 VRM",
      category: "other",
      date: "2026-11-25",
      source: "【VRoid Studio】15分钟完成自己的虚拟主播/角色 , 0基础 - 体验向 https://www.bilibili.com/video/BV1n34y117i4/",
      summary: "从官网进 VRoid，用预设搭女体的脸、体型和衣服，再导出 VRM，并用 VSeeFace 接上。窗口没有写出版本号。成片 23 分 36 秒。",
      cover: "notes/zero-base-character/23.jpg"
    },
    {
      slug: "paper-hair-bones",
      title: "Paper朱 p05 VRoid 头发绑骨",
      category: "hair",
      date: "2026-11-25",
      source: "【Vroid教程】从零开始的二次元老婆/虚拟偶像全流程教程 p05 https://www.bilibili.com/video/BV19L4y157aS/?p=5",
      summary: "在英文版 VRoid 1.5.0 里用 Edit Hair Bounce 自动生成骨骼，把不该动的发片移出骨组，再按示意图看 Bones、Fixed Point、Stiffness、Gravity 和 Hit Radius。成片约 4 分 22 秒，对得上第 5 分 P。",
      cover: "notes/paper-hair-bones/16.jpg"
    },
    {
      slug: "oc-hair-shape",
      title: "异国剑士 p06 头发",
      category: "hair",
      date: "2026-11-25",
      source: "【VRoid教程/画手向】如何让你的OC变成立体人 p06 头发 https://www.bilibili.com/video/BV1yX4y1p7Zk/?p=6",
      summary: "预设套不上这头短发，就把后发、刘海和侧发都画进手绘组。发束用锚点、宽度和厚度对形状，先用几种纯色分开，最后再染回发色。成片约 13 分 53 秒，对得上第 6 分 P。",
      cover: "notes/oc-hair-shape/20.jpg"
    },
    {
      slug: "mari-yume-beginner",
      title: "免费做 3D VTuber：样本、格子裙贴图和 VSeeFace",
      category: "other",
      date: "2026-11-25",
      source: "Make Your Own 3D VTuber Avatar Using Vroid Studio For FREE https://www.youtube.com/watch?v=icphVX7QTo4",
      summary: "在 VRoid Studio 2.1.3 里从 AvatarSample_Y 改头发，把身高拉到 180.7cm，再把 BOOTH 上免费的格子裙贴图导进 Long Coat (High Neck)。导出 VRM 后用 VSeeFace 1.13.38c 和 OBS 的 Spout2 叠进画面。成片约 9 分 34 秒。",
      cover: "notes/mari-yume-beginner/18.jpg"
    },
    {
      slug: "paper-detail-cleanup",
      title: "Paper朱 p06 VRoid 模型细节整理",
      category: "other",
      date: "2026-11-25",
      source: "【Vroid教程】从零开始的二次元老婆/虚拟偶像全流程教程 p06 https://www.bilibili.com/video/BV19L4y157aS/?p=6",
      summary: "在英文版 VRoid 1.5.0 里把表情和口型收到不穿模，闭眼停在 95，再在皮肤贴图上补阴影。摄影棚里把风停到 0，并打开抗锯齿 High。成片约 5 分 20 秒，对得上第 6 分 P。",
      cover: "notes/paper-detail-cleanup/16.jpg"
    },
    {
      slug: "photo-pose-editor",
      title: "摄影棚里摆姿势，再开抗锯齿和 Bloom 拍照",
      category: "photo",
      date: "2026-11-25",
      source: "Vroid Studio - Photo Booth Pose editor https://www.youtube.com/watch?v=HDSDf_Ukjbg",
      summary: "在 Photo Booth 里把下拉改成 Posing，用控制器摆身体、用手型下拉摆手。拍照前把抗锯齿设成 High、勾上 Bloom（Intensity 8.958，Threshold 0.500，Color #FFFFFF），预设尺寸选 4K（3840×2160）。窗口标题没有版本号。成片约 6 分 32 秒。",
      cover: "notes/photo-pose-editor/11.jpg"
    },
    {
      slug: "photo-png-booth",
      title: "用 Photo Booth 拍一张能去背的 PNG",
      category: "photo",
      date: "2026-11-25",
      source: "VTuber Tools - #1: Easy PNG! https://www.youtube.com/watch?v=GhnT4qN3OL8",
      summary: "下载页写着 VRoid Studio v1.3.0。在 Photo Booth 里把画面停在 4K（3840×2160），背景从 #474747 换成绿底再导入图片。去背真正打开的是 Photopea 的 Color Range，Fuzziness 是 40，再 Export as PNG。成片约 10 分 50 秒。",
      cover: "notes/photo-png-booth/16.jpg"
    },
    {
      slug: "brow-three-tricks",
      title: "眉毛三个小技：改预设、拉出埋眉、补上描边",
      category: "brows",
      date: "2026-11-25",
      source: "【VRoid Studio】テクスチャ苦手な人必見！眉毛の小技3選 https://www.youtube.com/watch?v=qwQbML-PlJ0",
      summary: "不从零画眉毛。先选一款短眉预设，改纵宽、间距和倾斜；换表情眉陷进皮肤时，用前后和横向旋转来回修；再在纹理下层描一圈边，用发虚的笔刷和图层不透明度收一收。录屏没有版本号。成片约 5 分 3 秒。",
      cover: "notes/brow-three-tricks/11.jpg"
    },
    {
      slug: "vroid-ears-redone",
      title: "用头发手绘组做猫耳、兔耳和一上一下的垂耳",
      category: "ears",
      date: "2026-11-25",
      source: "[Tutorial] How I do my ears in Vroid redone! https://www.youtube.com/watch?v=gw2fax5vI34",
      summary: "兽耳不在脸部参数里，是 Hair Editor 的 Freehand Group。猫耳从下往上画，耳内另铺一层，Fixed Point 把晃动留在耳尖；兔耳把外壳和内侧分成两组骨头，垂耳要关掉对称、左右分开画。成片约 15 分 22 秒，界面没有版本号。",
      cover: "notes/vroid-ears-redone/01.jpg"
    },
    {
      slug: "accessory-glasses-ears",
      title: "在配件页里做眼镜和兽耳",
      category: "accessory",
      date: "2026-11-25",
      source: "Vroid Studio: Accessories https://www.youtube.com/watch?v=ywbc35fMqBc",
      summary: "在 VRoid Studio 1.13.0 的 Accessories 里，用 Glasses (Thick) 的 Frame Shape 4 做镜框，把镜片贴图涂黑、镜框涂白，再旋到头顶；Cat Ears 用 Tip Roundness、Ear Size 和 Ear Shape 改形，并在新图层上画白斑。导出 VRM 时 Delete Transparent Meshes 和 Combine Hair Mesh 都不要勾。成片约 7 分 16 秒。",
      cover: "notes/accessory-glasses-ears/01.jpg"
    },
    {
      slug: "plus-size-body",
      title: "用 Bodysuit 做丰满体型",
      category: "body",
      date: "2026-11-25",
      source: "HOW TO CREATE BODY PLUS SIZE MODEL IN VROID STUDIO STABLE VERS. https://www.youtube.com/watch?v=xYQu9ph4f9s",
      summary: "在 VRoid Studio 1.11.1 里先把身体贴图放进 Bodysuit，用 Expand Bodysuit（65.198）、Increase Body Bulk 1（100）和 Flatten Torso 把身子撑开，再在 Body 的 Whole Body 里把肩加到 0.811、胸位收到 -1、腰拉到 2。做长裙时腰又收到 0.048。成片约 13 分 16 秒。",
      cover: "notes/plus-size-body/01.jpg"
    },
    {
      slug: "mouth-natural-shape",
      title: "口元收自然：闭嘴和张嘴分开调",
      category: "nose-mouth",
      date: "2026-11-25",
      source: "初心者向けVRoidStudio講座＃９ 表情の設定 https://www.youtube.com/watch?v=hIi1s01d0kI",
      summary: "在表情编辑里打开口(女性)，先把预设口形收到一半，再按闭嘴和张嘴两套重配喜怒哀乐，并用あいうえお、口内和歯把嘴形收小。窗口里看不到版本号，这一集没有打开鼻子。成片约 11 分。",
      cover: "notes/mouth-natural-shape/04.jpg"
    },
    {
      slug: "hairdeck",
      title: "用 HairDeck 从一张图做发卡头发",
      category: "hair",
      date: "2026-11-25",
      source: "HairDeck: Animation-Ready Stylized Hair Cards from a Single Image https://huggingface.co/spaces/hyz317/HairDeck",
      summary: "免费演示页是 https://huggingface.co/spaces/hyz317/HairDeck 。上传一张人像，Variations 选 1，Seed 为 0，Sampling steps 选 50，Guidance scale 为 2，再点 Generate hair。Reference head 默认勾着，Spring bones 没勾。导出的 VRM 在示例人偶上，不进 VRoid 的头发编辑器。",
      cover: "notes/hairdeck/02.jpg"
    }
  ]
};
