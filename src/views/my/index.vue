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
					class="avatar"
					slot="icon"
					width="50"
					height="50"
					round
					fit="cover"
					src="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
				<div slot="title" class="nickname">昵称</div>
				<van-button size="small" round class="update-btn"
					>编辑资料</van-button
				>
			</van-cell>
			<van-grid :border="false" class="data-info">
				<van-grid-item class="data-info-item">
					<div slot="text" class="text-wrap">
						<div class="count">12</div>
						<div class="text">头条</div>
					</div>
				</van-grid-item>
				<van-grid-item class="data-info-item">
					<div slot="text" class="text-wrap">
						<div class="count">12</div>
						<div class="text">关注</div>
					</div>
				</van-grid-item>
				<van-grid-item class="data-info-item">
					<div slot="text" class="text-wrap">
						<div class="count">0</div>
						<div class="text">粉丝</div>
					</div>
				</van-grid-item>
				<van-grid-item class="data-info-item">
					<div slot="text" class="text-wrap">
						<div class="count">1</div>
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
	background-size: 100% 100%;
	.base-info {
		background-color: unset;
		height: 115px;
		box-sizing: border-box;
		padding: 38px 11px 11px;
		.avatar {
			width: 66px;
			height: 66px;
			border: 1px solid #fff;
			box-sizing: border-box;
			margin-right: 11px;
		}
		.nickname {
			font-size: 15px;
			color: #fff;
		}
		.update-btn {
			height: 20px;
			font-size: 10px;
			color: #666;
		}
	}
	.data-info {
		.data-info-item {
			height: 65px;
			color: #fff;
      .text-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
			.count {
				font-size: 18px;
			}
			.text {
				font-size: 11px;
			}
		}
	}
}
::v-deep.van-grid-item {
	.van-grid-item__content {
		background-color: unset;
	}
}
</style>
