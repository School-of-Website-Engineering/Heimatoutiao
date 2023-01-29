//本地存储模块
//设置
export const getItem = (name) => {
	const data = window.localStorage.getItem(name);
	try {
		// 尝试把data转为js对象
		return JSON.parse(data);
	}
	catch (err) {
		// data不是json格式字符串，直接原样返回
		return data;
	}
};
//获取
export const setItem = (name, value) => {
	// if是对象，把value转为字符串
	if (typeof value === "object") {
		value = JSON.stringify(value);
	}
	window.localStorage.setItem(name, value);
};
//删除
export const removeItem = (name) => {
	window.localStorage.removeItem(name);
}
