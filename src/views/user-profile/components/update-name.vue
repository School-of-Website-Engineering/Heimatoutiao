<template>
	<div>
		<!-- 导航栏 -->
		<van-nav-bar
			class="nav-bar-vant"
			title="修改昵称"
			left-text="取消"
			right-text="完成"
			@click-left="$emit('close')"
			@click-right="onClickRight"
		/>
		<!--  输入框  -->
		<van-field
			v-model="message"
			rows="2"
			type="textarea"
			maxlength="50"
			placeholder="请输入留言"
			show-word-limit
		/>
	</div>
</template>

<script>
export default {
	name: "UpdateName",
	data() {
		return {message: ""};
	},
	methods: {onClickRight() {}}
};
</script>

<style lang="scss" scoped>
::v-deep .van-nav-bar__text {
	color: #fff;
}
</style>
