//封装axios
import axios from "axios";
import store from "@/store";
//创建axios实例
const request = axios.create({
	baseURL: "http://api-toutiao-web.itheima.net",
	// headers: { "Content-Type": "application/json;charset=UTF-8" },
	timeout: 7000 // 请求超时时间
});
//请求拦截器
request.interceptors.request.use(
	(config) => {
		//有没有token
		let token = store.state.token
		let isLoginToken = store.state.token.user.token
		if (token && isLoginToken) {
			config.headers.Authorization = `Bearer ${isLoginToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
//响应拦截器
request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default request;
