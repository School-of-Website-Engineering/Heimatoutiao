// export default [
// 	//重定向
// 	{
// 		path    : "/",
// 		redirect: "/login"
// 	},
// 	//导入登录组件
// 	{
// 		path     : "/login",
// 		component: () =>
// 			import(/* webpackChunkName: "login_home_welcome" */ "@/components/Login"),
// 		name: "login"
// 	},
// 	//导入主页组件
// 	{
// 		path     : "/home",
// 		component: () =>
// 			import(/* webpackChunkName: "login_home_welcome" */ "@/components/Home"),
// 		name    : "home",
// 		redirect: "/welcome",
// 		children: [
// 			{
// 				//导入欢迎组件
// 				path     : "/welcome",
// 				component: () =>
// 					import(
// 						/* webpackChunkName: "login_home_welcome" */ "@/components/Welcome"
// 					),
// 				name: "welcome"
// 			},

// 			{
// 				//导入用户组件
// 				path     : "/users",
// 				component: () =>
// 					import(
// 						/* webpackChunkName: "Users_Rights_Roles" */ "@/components/user/Users"
// 					),
// 				name: "users"
// 			},
// 		]
// 	}
// ];
