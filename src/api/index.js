import request from "@/utils/request";
//登录
export const getLogin = (data) => {
	return request({
		method: "POST",
		url   : "/app/v1_0/authorizations",
		data
	});
};
