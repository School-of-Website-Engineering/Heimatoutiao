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
		<van-tabs v-model="active" animated>
			<van-tab
				v-for="item in channels"
				:title="item.name"
				:key="item.id"
			>
        {{ item.name }}
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { getUserChannels } from "@/api";
export default {
	name: "Home",
	data() {
		return {
			// 当前选中的频道
			active: 0,
			// 频道列表
			channels: [],
		};
	},
	created() {
		this.loadChannels();
	},
	methods: {
		// 加载频道列表
		async loadChannels() {
			const { data } = await getUserChannels();
			this.channels = data.channels;
			console.log(this.channels.name);
		},
	},
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
</style>
