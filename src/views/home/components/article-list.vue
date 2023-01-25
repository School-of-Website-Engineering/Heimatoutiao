<template>
	<div class="article-cotainer" ref="article-list">
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
		>
			<van-cell
				v-for="item in articles"
				:key="item.id"
				:title="item.title"
			/>
		</van-list>
	</div>
</template>

<script>
import { getArticles } from "@/api";

export default {
	name : "ArticleList",
	props: {
		channels: {
			type    : Array,
			required: true
		}
	},
	data() {
		return {
			// 列表数据
			articles : [],
			// 是否加载中
			loading  : false,
			// 是否加载完成
			finished : false,
			// 时间戳
			timestamp: 1556789000001
		};
	},
	methods: {
		async onLoad() {
			console.log("sd");
			const { data } = await getArticles({
				channel_id: this.channels[0].id,
				timestamp : this.timestamp || Date.now(),
				with_top  : 1
			});
			const { results } = data;
			this.articles.push(...results);
			this.loading = false;
			if (results.length) {
				this.timestamp = data.pre_timestamp;
			}
			else {
				this.finished = true;
			}
		}
	},
	created() {}
};
</script>

<style lang="scss" scoped></style>
