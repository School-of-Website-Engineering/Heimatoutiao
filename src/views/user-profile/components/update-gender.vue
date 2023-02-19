<template>
	<div>
		<van-picker
			show-toolbar
			:columns="columns"
			@cancel="$emit('close')"
			@confirm="onConfirm"
			:default-index="defaultIndex"
		/>
	</div>
</template>

<script>
import {  updateUserProfile } from "@/api";
export default {
	name: "UpdateName",
	data() {
		return {
			value       : "",
			showPicker  : false,
			columns     : ["男", "女"],
			defaultIndex: this.value
		};
	},
	props: {
		// eslint-disable-next-line vue/no-dupe-keys
		value: {
			type    : Number,
			required: true
		}
	},
	methods: {
		async onConfirm() {
			this.$toast.loading({
				message    : "保存中...",
				forbidClick: true
			});
			try {
				await updateUserProfile({ gender: this.localName });
				//保存成功
				this.$toast.success("保存成功");
				this.$emit("input", this.localName);
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
