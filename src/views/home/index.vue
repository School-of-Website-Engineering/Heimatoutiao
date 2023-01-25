<template>
	<div class="home-container">
		<van-nav-bar class="app-nav-bar">
			<van-button
				slot="title"
				icon="search"
				type="info"
				class="search-btn"
				round
				size="small"
				>搜索</van-button
			>
		</van-nav-bar>
		<!-- 文章频道列表 -->
		<van-tabs v-model="active" animated  class="tbs-box">
			<van-tab class="tab-btn" v-for="item in channels" :title="item.name" :key="item.id">
				<!-- 文章列表 -->
				<articleList :channels="channels" />
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { getUserChannels } from "@/api";
import ArticleList from "./components/article-list.vue";
export default {
	name      : "Home",
	components: { ArticleList },
	data() {
		return {
			// 当前选中的频道
			active  : 0,
			// 频道列表
			channels: []
		};
	},
	created() {
		this.loadChannels();
	},
	methods: {
		// 加载频道列表
		async loadChannels() {
			try {
				const { data } = await getUserChannels();
				this.channels = data.channels;
				console.log(this.channels);
			}
			catch (error) {
				this.$toast.fail(error.response.data.message);
				console.log(error);
			}
		}
	}
};
</script>

<style scoped lang="scss">
.home-container {
	::v-deep .van-nav-bar__title {
		max-width: unset;
	}
	.app-nav-bar {
		.search-btn {
			width: 277px;
			height: 32px;
			background-color: #5babfb;
			font-size: 14px;
			color: #ffffff;
			border: none;
			.van-icon-search {
				color: #ffffff;
				font-size: 16px;
			}
		}
	}
}
::v-deep.tbs-box{
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  height: 570px;
  width: 100%;
  overflow-y: auto;
}
::v-deep .van-tabs--line .van-tabs__wrap{
  position: fixed;
  top: 45px;
  z-index:999
}
::v-deep .van-tabs__content{
  margin-top: 40px;
}
</style>
