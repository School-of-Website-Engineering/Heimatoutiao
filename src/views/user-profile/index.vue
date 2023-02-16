<template>
	<div class="user-profile">
		<!-- 导航栏 -->
		<van-nav-bar
			title="个人信息"
			left-arrow
			@click-left="onClickLeft($router.back())"
		/>
		<van-cell title="头像" center is-link>
			<van-image
				src="https://img.yzcdn.cn/vant/cat.jpeg"
                round
                fit="cover"
				width="30"
				height="30"
			/>
		</van-cell>
		<van-cell title="昵称" is-link value="hello"></van-cell>
		<van-cell title="性别" is-link value="男"></van-cell>
		<van-cell title="生日" is-link value="2023-02-16"></van-cell>
	</div>
</template>

<script>
export default {
	name: "UserProfile",
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>

<style lang="scss" scoped>
::v-deep .van-nav-bar .van-icon {
	color: #fff;
}
</style>
