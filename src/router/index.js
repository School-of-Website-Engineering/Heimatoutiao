import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

//重写push、replace防止控制台报错
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写VueRouter.prototype身上的push方法
VueRouter.prototype.push = function(location, resolve, reject) {
	if (reject && resolve) {
		originPush.call(this, location, resolve, reject);
	}
	else {
		originPush.call(
			this,
			location,
			() => {},
			() => {}
		);
	}
};

//重写VueRouter.prototype身上的replace方法
VueRouter.prototype.replace = function(location, resolve, reject) {
	if (reject && resolve) {
		originReplace.call(this, location, resolve, reject);
	}
	else {
		originReplace.call(
			this,
			location,
			() => {},
			() => {}
		);
	}
};

const router = new VueRouter({
	routes,
	scrollBehavior() {
		return { y: 0 };
	},
	base: process.env.BASE_URL,
	mode: "hash"
});

export default router;
