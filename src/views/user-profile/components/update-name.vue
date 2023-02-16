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
			v-model="localName"
			rows="2"
			type="textarea"
			maxlength="7"
			placeholder="请输入昵称"
			show-word-limit
		/>
	</div>
</template>

<script>
import { updateUserProfile } from "@/api";
export default {
	name : "UpdateName",
	props: {
		name: {
			type    : String,
			required: true
		}
	},
	data() {
		return { localName: this.name };
	},
	methods: {
		async onClickRight() {
			this.$toast.loading({
				message    : "保存中...",
				forbidClick: true
			});
			try {
				await updateUserProfile({ name: this.localName });
				//保存成功
				this.$toast.success("保存成功");
        this.$emit("update-name", this.localName);
				//关闭弹出层
				this.$emit("close");
			}
			catch (error) {
				if (error && error.response && error.response.status === 409) {
					this.$toast.fail("昵称已存在");
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
::v-deep .van-nav-bar__text {
	color: #fff;
}
</style>
