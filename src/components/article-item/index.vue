<template>
	<van-cell class="article-item">
		<div slot="title" class="title van-multi-ellipsis--l3">
			{{ article.title }}
		</div>
		<div slot="label" class="label">
			<!-- 三封面 -->
			<div class="cover-wrapper" v-if="article.cover.type === 3">
				<div
					class="cover-wrap-item"
					v-for="(img, index) in article.cover.images"
					:key="index"
				>
					<van-image class="cover-item" :src="img" fit="cover" />
				</div>
			</div>
			<!-- 下方的label -->
			<div class="label-wrapper">
				<span>{{ article.aut_name }}</span>
				<span>{{ article.comm_count }}评论</span>
				<span>{{ article.pubdate }}</span>
			</div>
		</div>
		<!-- 单封面情况 -->
		<van-image
			v-if="article.cover.type === 1"
			:src="article.cover.images[0]"
			class="right-img"
			fit="cover"
		/>
	</van-cell>
</template>

<script>
export default {
	name : "ArticleItem",
	props: {
		article: {
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
.article-item {
	.title {
		font-size: 16px;
		color: #3a3a3a;
	}
	::v-deep .van-cell__value {
		flex: unset;
		width: 116px;
		height: 73px;
		margin-left: 13px;
	}
	.right-img {
		width: 116px;
		height: 73px;
	}
	.cover-wrapper {
		padding: 15px 0;
		display: flex;
		justify-content: space-around;
		.cover-wrap-item {
			flex-wrap: nowrap;
			height: 73px;
			.cover-item {
				width: 100%;
				height: 73px;
			}
		}
	}
}
</style>
