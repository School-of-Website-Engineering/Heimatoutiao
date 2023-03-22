<template>
	<div class="root">
		<!-- 路由出口 -->
		<!--添加组件缓存-->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default { name: "App" };
</script>

<style lang="scss" scoped></style>
