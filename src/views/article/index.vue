<template>
	<!--顶部-->
	<div>
		<van-nav-bar title="文章详情" left-arrow @click-left="$router.back()" />
		<h1 class="title">sadfsadffffffffdsafffffffff</h1>
		<van-cell class="user-info" center>
			<div class="name" slot="title">adsfasd</div>
			<van-image
				slot="icon"
				round
				fit="cover"
				class="user-avatar"
				src="https://img01.yzcdn.cn/vant/cat.jpeg"
			/>
			<div slot="label" class="time">sadfads</div>
			<van-button
				type="info"
				round
				size="small"
				class="right-btn"
				icon="plus"
				>关注</van-button
			>
		</van-cell>
		<div class="content markdown-body">
			<p>
				Misspelling of the Day inttimatdating Antedating, Instituting,
				Intimating, intimidate, intimidated, intimidating, intimidation.
				MORE Nearby Words sadety sadewe sadey sadeye sadf sadfasd s s
			</p>
      <ul>
        <li>ADSASFASD</li>
        <li>ADSASFASD</li>
        <li>ADSASFASD</li>
        <li>ADSASFASD</li>
        <li>ADSASFASD</li>
      </ul>
		</div>
	</div>
</template>

<script>
import "./github-markdown-light.css";
export default {
	name: "Artice",
	data() {
		return {};
	},
	props: {
		articleId: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.markdown-body {
	padding: 14px;
	background-color: #fff;
  ul{
    list-style: rean-hanja-informal;
  }
}
.user-info {
	.name {
		font-size: 12px;
		color: #333;
	}
	.time {
		font-size: 11px;
		color: #b4b4b4;
	}
	.user-avatar {
		width: 35px;
		height: 35px;
		margin-right: 8px;
	}
	.right-btn {
		width: 85px;
		height: 29px;
	}
}
::v-deep .van-nav-bar .van-icon {
	color: #fff;
}
.title {
	text-align: center;
	font-size: 20px;
	color: #333;
	padding: 14px;
	background-color: #fff;
	margin: 0;
}
</style>
