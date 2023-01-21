<template>
	<div class="root">
		<Header></Header>
		<!-- 路由出口 -->
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
	name      : "App",
	//注册组件
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss" scoped></style>
