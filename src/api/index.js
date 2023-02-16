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
};

//获取登录用户信息
export const getUserInfo = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/user"
	});
};

//获取用户频道列表
export const getUserChannels = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/user/channels"
	});
};

//频道列表
export const getArticles = (params) => {
	return request({
		method: "GET",
		url   : "/app/v1_1/articles",
		params
	});
};

//全部频道列表
export const getAllChannels = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/channels"
	});
};

//添加用户频道
export const addUserChannels = (data) => {
	return request({
		method: "PATCH",
		url   : "/app/v1_0/user/channels",
		data
	});
};

//删除用户频道
export const deleteUserChannels = (channelId) => {
	return request({
		method: "DELETE",
		url   : `/app/v1_0/user/channels/${channelId}`
	});
};

//获取搜索联想建议
export const getSearchSuggestions = (q) => {
	return request({
		method: "GET",
		url   : "/app/v1_0/suggestion",
		params: { q }
	});
};

//获取搜索结果
export const getSearchResults = (params) => {
	return request({
		method: "GET",
		url   : "/app/v1_0/search",
		params
	});
};
//获取用户搜索历史
export const getSearchHistories = () => {
	return request({
		method: "GET",
		url   : "/app/v1_0/search/histories"
	});
};

//获取新闻文章详情
export const getArticle = (articleId) => {
	return request({
		method: "GET",
		url   : `/app/v1_0/articles/${articleId}`
	});
};

//关注用户
export const addFollow = (target) => {
	return request({
		method: "POST",
		url   : "/app/v1_0/user/followings",
		data  : { target }
	});
}

//取消关注用户
export const deleteFollow = (target) => {
	return request({
		method: "DELETE",
		url   : `/app/v1_0/user/followings/${target}`
	});
}

//收藏文章
export const addCollect = (target) => {
	return request({
		method: "POST",
		url   : "/app/v1_0/article/collections",
		data  : { target }
	});
}

//取消收藏文章
export const deleteCollect = (target) => {
	return request({
		method: "DELETE",
		url   : `/app/v1_0/article/collections/${target}`
	});
}

//点赞文章
export const addLike = (target) => {
	return request({
		method: "POST",
		url   : "/app/v1_0/article/likings",
		data  : { target }
	});
}

//取消点赞文章
export const deleteLike = (target) => {
	return request({
		method: "DELETE",
		url   : `/app/v1_0/article/likings/${target}`
	});
}

//获取文章评论或评论回复
export const getComments = (params) => {
	return request({
		method: "GET",
		url   : "/app/v1_0/comments",
		params
	});
}
