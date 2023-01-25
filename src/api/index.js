import request from "@/utils/request";
//登录
export const getLogin = (data) => {
	return request({
		method: "POST",
		url   : "/app/v1_0/authorizations",
		data
	});
};

//发送短信验证码
export const getSendSms = (mobile) => {
	return request({
		method: "GET",
		url   : `/app/v1_0/sms/codes/${mobile}`
	});
}

//获取登录用户信息
export const getUserInfo = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/user"
	});
}

//获取用户频道列表
export const getUserChannels = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/user/channels"
	});
}
