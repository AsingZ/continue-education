//配置文件
module.exports = {
	devServer: {
		port: 8080,
		//代理
		proxy: {
			//配置跨域
			'/': {
				target: "http://localhost:8080/",
				ws: true,
				//是否将主机头的地址跟改为目标这个地址
				changOrigin: true,
			}
		}
	},
	// 配置scss,这里是写的外部文件
	/*
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "./src/styles/index";`,
			},
		},
	},
	*/
	// 配置 index.html中的htmlWebpackPlugin.options.title
	// 用于显示标题
	chainWebpack: config =>{
		config.plugin('html').tap(args => {
			args[0].title = '成都师范学院继续教育平台';
			return args;
		})
	},
};
