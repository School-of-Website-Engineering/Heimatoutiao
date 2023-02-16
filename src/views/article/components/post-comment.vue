<template>
	<div class="post-comment">
		<van-field
			v-model="message"
			rows="2"
			type="textarea"
			maxlength="120"
			placeholder="请输入评论 "
			show-word-limit
		/>
		<van-button class="on-post" type="primary" @click="onPost"
			>发布</van-button
		>
	</div>
</template>

<script>
import { addComment } from "@/api";
export default {
	name: "PostComment",
	data() {
		return { message: "" };
	},
	props: {
		target: {
			type    : [String, Number, Object],
			required: true
		},
		articleId: {
			type   : [String, Number, Object],
			default: null
		}
	},
	methods: {
		async onPost() {
			const { data } = await addComment({
				target : this.target.toString(),
				content: this.message,
				art_id :
					this.articleId === null ? this.articleId.toString() : null
			});
			console.log(this.articleId);
			console.log(data);
			this.$toast.success("评论成功");
			this.message = "";
		}
	}
};
</script>

<style lang="scss" scoped>
.post-comment {
	display: flex;
	align-items: center;
	.on-post {
		padding: 0;
		margin: 10px;
	}
}
</style>
