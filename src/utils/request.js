//封装axios
import axios from "axios";
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
		// const token = sessionStorage.getItem("token");
		// if (token) {
		// 	config.headers["x-auth-token"] = token;
		// }
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
