export default [
	//重定向
	{
		path    : "/",
		redirect: "/home"
	},
	// //导入登录组件
	{
		path     : "/login",
		component: () =>
			import(
				/* webpackChunkName: "login_home_welcome" */ "@/views/login/"
			),
		name: "login"
	},
	{
		path     : "/",
		component: () =>
			import(
				/* webpackChunkName: "login_home_welcome" */ "@/views/layout/"
			),
		name    : "layout",
		children: [
			{
				path     : "/", //默认子路由
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/views/home/"
					)
			},
			{
				path     : "/home",
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/views/home/"
					)
			},
			{
				path     : "/video",
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/views/video/"
					)
			},
			{
				path     : "/my",
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/views/my/"
					)
			},
			{
				path     : "/qa",
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/views/qa/"
					)
			}
		]
	}
];
