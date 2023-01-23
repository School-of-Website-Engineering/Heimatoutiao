import { getItem, setItem } from "@/utils/storage";
const TOKEN_KEY = "TOUTIAO_USER"
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//登录状态
		setUser(state, user) {
			state.user = user;
			// 保存到本地
			setItem("TOKEN_KEY", state.user);
		}
	},
	//登录状态
	state: { user: getItem("TOKEN_KEY") }
};
