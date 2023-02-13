// vue.config.js

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({transpileDependencies: true});

module.exports = {
	publicPath: "/Heimatoutiao/",
	lintOnSave: false,
	// publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

	//代理服务器
	devServer: {
		proxy: {
			"/api": {
				target      : "http://api-toutiao-web.itheima.net", //代理转发路径
				ws          : true, //支持websocket
				changeOrigin: true //跨域
			}
		}
	}
};
