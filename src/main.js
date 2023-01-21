import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

//全局样式表
import "./assets/scss/global.scss";


Vue.prototype.imgUrl = "https://sc.wolfcode.cn";
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app")
