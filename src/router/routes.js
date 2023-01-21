export default [
	//重定向
	{
		path    : "/",
		redirect: "/login"
	},
	//导入登录组件
	{
		path     : "/login",
		component: () =>
			import(/* webpackChunkName: "login_home_welcome" */ "@/components/Login"),
		name: "login"
	},
	//导入主页组件
	{
		path     : "/home",
		component: () =>
			import(/* webpackChunkName: "login_home_welcome" */ "@/components/Home"),
		name    : "home",
		redirect: "/welcome",
		children: [
			{
				//导入欢迎组件
				path     : "/welcome",
				component: () =>
					import(
						/* webpackChunkName: "login_home_welcome" */ "@/components/Welcome"
					),
				name: "welcome"
			},

			{
				//导入用户组件
				path     : "/users",
				component: () =>
					import(
						/* webpackChunkName: "Users_Rights_Roles" */ "@/components/user/Users"
					),
				name: "users"
			},
			//导入权限组件
			{
				path     : "/rights",
				component: () =>
					import(
						/* webpackChunkName: "Users_Rights_Roles" */ "@/components/power/Rights"
					),
				name: "rights"
			},
			//导入角色组件
			{
				path     : "/roles",
				component: () =>
					import(
						/* webpackChunkName: "Users_Rights_Roles" */ "@/components/power/Roles"
					),
				name: "roles"
			},

			//导入商品分类组件
			{
				path     : "/categories",
				component: () =>
					import(
						/* webpackChunkName: "Cate_Params" */ "@/components/goods/Cate"
					),
				name: "categories"
			},
			//导入商品参数组件
			{
				path     : "/params",
				component: () =>
					import(
						/* webpackChunkName: "Cate_Params" */ "@/components/goods/Params"
					),
				name: "params"
			},
			//导入商品列表组件
			{
				path     : "/goods",
				component: () => import(
					/* webpackChunkName: "GoodsList_Add" */ "@/components/goods/List"),
				name: "goods"
			},
			//导入添加商品组件
			{
				path     : "/goods/add",
				component: () => import(
					/* webpackChunkName: "GoodsList_Add" */ "@/components/goods/Add"),
				name: "add"
			},
			//导入订单组件
			{
				path     : "/orders",
				component: () => import(
					/* webpackChunkName: "Order_Report" */ "@/components/order/Order"),
				name: "orders"
			},
			//导入数据报表组件
			{
				path     : "/reports",
				component: () => import(
					/* webpackChunkName: "Order_Report" */ "@/components/report/Report"),
				name: "reports"
			}
		]
	}
];
