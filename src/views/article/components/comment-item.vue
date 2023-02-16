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
				<div class="like-wrap">
					<van-icon name="good-job-o" />
					<span>{{ comment.like_count }}</span>
				</div>
			</div>
			<div class="content">{{ comment.content }}啥发送到发送到发送到发送到发大水发生的</div>
			<div class="time">
				<span>{{ comment.pubdate | datetime('MM-DD HH:ss') }}</span>
				<van-button class="reply-btn" round size="mini">
					12回复
				</van-button>
			</div>
		</div>
	</van-cell>
</template>

<script>
export default {
	name : "CommentItem",
	props: {
		comment: {
			type    : Object,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
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
