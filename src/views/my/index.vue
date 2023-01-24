<template>
	<div class="my-container">
		<van-cell-group class="my-info">
			<van-cell
				title="单元格"
				value="内容"
				center
				class="base-info"
				:border="false"
			>
				<van-image
					slot="icon"
					width="50"
					height="50"
					round
					fit="cover"
					src="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
				<div slot="title">昵称</div>
				<van-button size="small" round>编辑资料</van-button>
			</van-cell>
			<van-grid :border="false">
				<van-grid-item>
					<div slot="text">
						<div class="span">12</div>
						<div class="text">头条</div>
					</div>
				</van-grid-item>
				<van-grid-item>
					<div slot="text">
						<div class="span">12</div>
						<div class="text">关注</div>
					</div>
				</van-grid-item>
				<van-grid-item>
					<div slot="text">
						<div class="span">0</div>
						<div class="text">粉丝</div>
					</div>
				</van-grid-item>
				<van-grid-item>
					<div slot="text">
						<div class="span">1</div>
						<div class="text">获赞</div>
					</div>
				</van-grid-item>
			</van-grid>
		</van-cell-group>
		<van-grid :column-num="2">
			<van-grid-item icon="star-o" text="收藏" />
			<van-grid-item icon="browsing-history-o" text="历史" />
		</van-grid>
		<van-cell title="消息通知" is-link to="/" />
		<van-cell title="小智同学" is-link to="/" />
		<van-cell title="退出登录" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.my-info {
	background: url(./images/banner.png) no-repeat;
	.base-info {
		background-color: unset;
	}
}
::v-deep.van-grid-item {
	.van-grid-item__content {
		background-color: unset;
	}
}
</style>
