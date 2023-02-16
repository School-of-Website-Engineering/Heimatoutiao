<template>
	<div class="comment-reply">
		<!-- 头部 -->
		<van-nav-bar :title="`${comment.reply_count}条回复`">
			<van-icon slot="left" name="cross"></van-icon>
		</van-nav-bar>
		<!-- 当前评论项 -->
		<comment-item :comment="comment" />
	</div>
</template>

<script>
import commentItem from "./comment-item.vue";
export default {
	name      : "CommentReply",
	components: { commentItem },
	props     : {
		//查看回复评论的评论项
		comment: { type: Object, default: () => {} }
	}
};
</script>

<style lang="scss" scoped></style>
