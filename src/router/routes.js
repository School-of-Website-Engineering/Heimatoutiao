export default [
	//重定向
	// {
	// 	path    : "/",
	// 	redirect: "/login"
	// },
	//导入登录组件
	{
		path     : "/Header",
		component: () =>
			import(/* webpackChunkName: "login_home_welcome" */ "@/components/Header/Header.vue"),
		name: "Header"
	},
];
