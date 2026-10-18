import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "random",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "不该",
				artist: "周杰伦/张惠妹",
				url: "/assets/music/不该 - 周杰伦、张惠妹.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "不再犹豫",
				artist: "黄家驹",
				url: "/assets/music/不再犹豫 - 黄家驹.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "分裂",
				artist: "周杰伦",
				url: "/assets/music/分裂 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "枫",
				artist: "周杰伦",
				url: "/assets/music/枫 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "富士山下",
				artist: "陈奕迅",
				url: "/assets/music/富士山下 - 陈奕迅.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "搁浅",
				artist: "周杰伦",
				url: "/assets/music/搁浅 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "还在流浪",
				artist: "周杰伦",
				url: "/assets/music/还在流浪 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "红尘客栈",
				artist: "周杰伦",
				url: "/assets/music/红尘客栈 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "花田错",
				artist: "王力宏",
				url: "/assets/music/花田错 - 王力宏.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "那天下雨了",
				artist: "周杰伦",
				url: "/assets/music/那天下雨了 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "懦夫",
				artist: "周杰伦",
				url: "/assets/music/懦夫 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "珊瑚海",
				artist: "周杰伦/梁心颐",
				url: "/assets/music/珊瑚海 - 周杰伦、梁心颐.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "手写的从前",
				artist: "周杰伦",
				url: "/assets/music/手写的从前 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
			{
				name: "西西里",
				artist: "周杰伦",
				url: "/assets/music/西西里 - 周杰伦.mp3",
				cover: "/assets/music/cover/87007887_p0_master1200.jpg",
				lrc: "",
			},
		],
	},
};
