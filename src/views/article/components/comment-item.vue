<template>
	<van-cell title="123" class="comment-item">
		<van-image
			slot="icon"
			class="avatar"
			round
			fit="cover"
			:src="comment.aut_photo"
		/>
		<div slot="title">
			<div class="title-warp">
				<div class="name">{{ comment.aut_name }}</div>
				<div class="like-wrap" @click="onLike">
					<van-icon
						:class="{ liked: comment.is_liking }"
						:name="comment.is_liking ? 'good-job' : 'good-job-o'"
					/>
					<span :class="{ liked: comment.is_liking }">{{
						comment.like_count
					}}</span>
				</div>
			</div>
			<div class="content">{{ comment.content }}</div>
			<div class="time">
				<span>{{ comment.pubdate | datetime("MM-DD HH:ss") }}</span>
				<van-button
					class="reply-btn"
					round
					size="mini"
					@click="$emit('reply-click', comment)"
				>
					{{ comment.reply_count }} 回复
				</van-button>
			</div>
		</div>
	</van-cell>
</template>

<script>
import { deleteCommentLike, addCommentLike } from "@/api";

export default {
	name : "CommentItem",
	props: {
		comment: {
			type    : Object,
			required: true
		}
	},
	methods: {
		async onLike() {
			//已点赞
			const commentId = this.comment.com_id.toString();
			if (this.comment.is_liking) {
				//取消点赞
				await deleteCommentLike(commentId);
				// eslint-disable-next-line vue/no-mutating-props
				this.comment.like_count--;
			}
			else {
				//点赞
				await addCommentLike(commentId);
				// eslint-disable-next-line vue/no-mutating-props
				this.comment.like_count++;
			}
			//更新点赞状态
			// eslint-disable-next-line vue/no-mutating-props
			this.comment.is_liking = !this.comment.is_liking;
		}
	}
};
</script>

<style lang="scss" scoped>
.liked {
	color: hotpink;
}
.title-warp {
	display: flex;
	justify-content: space-between;
}
.van-cell__title,
.van-cell__value {
	flex: unset;
	width: 100%;
}
.comment-item {
	.avatar {
		width: 36px;
		height: 36px;
		margin-right: 13px;
	}
	.name {
		font-size: 14px;
		color: #406599;
	}
	.time {
		font-size: 9px;
		color: #999;
		display: flex;
		align-items: center;
		.reply-btn {
			margin-left: 10px;
		}
	}
	.content {
		margin-top: 10px;
		font-size: 16px;
		color: #222;
	}
}
</style>
