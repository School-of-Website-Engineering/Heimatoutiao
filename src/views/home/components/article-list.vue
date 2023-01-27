<template>
	<div class="article-cotainer" ref="article-list">
		<van-pull-refresh
			v-model="isRefresh"
			@refresh="onRefresh"
			:success-text="refreshSuccessText"
			:success-duration="1200"
		>
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
			>
				<article-item
					v-for="(item, index) in articles"
					:key="index"
					:article="item"
				></article-item>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
import { getArticles } from "@/api";
import ArticleItem from "@/components/article-item/index.vue";

export default {
	name      : "ArticleList",
	components: { ArticleItem },
	props     : {
		channels: {
			type    : Array,
			required: true
		},
		active: {
			type    : Number,
			required: true
		}
	},
	data() {
		return {
			// 列表数据
			articles          : [],
			// 是否加载中
			loading           : false,
			// 是否加载完成
			finished          : false,
			// 时间戳
			timestamp         : 1556789000001,
			// 是否下拉刷新
			isRefresh         : false,
			// 下拉刷新成功提示
			refreshSuccessText: ""
		};
	},
	methods: {
		// 1. 为1时，显示一张图片
		// 2. 为2时，显示一张图片
		// 3. 为3时，显示三张图片
		checkCover() {
			this.articles.forEach((item) => {
				if (item.cover.type === 0) {
					item.cover.type = Math.floor(Math.random() * 3) + 1;
				}
				if (item.cover.type === 1) {
					item.cover.images = ["https://img01.yzcdn.cn/vant/cat.jpeg"];
				}
				if (item.cover.type === 2) {
					item.cover.images = [
						"https://img01.yzcdn.cn/vant/cat.jpeg",
						"https://img01.yzcdn.cn/vant/cat.jpeg"
					];
				}
				if (item.cover.type === 3) {
					item.cover.images = [
						"https://img01.yzcdn.cn/vant/cat.jpeg",
						"https://img01.yzcdn.cn/vant/cat.jpeg",
						"https://img01.yzcdn.cn/vant/cat.jpeg"
					];
				}
			});
		},

		async onLoad() {
			try {
				const { data } = await getArticles({
					channel_id: this.active,
					timestamp : this.timestamp++,
					with_top  : 1
				});
				const { results } = data;
				this.articles.push(...results);
				this.loading = false;
				this.checkCover();
				if (results.length) {
					this.timestamp = data.pre_timestamp;
				}
				else {
					this.finished = true;
				}
			}
			catch (e) {
				this.$toast.fail(e.message);
			}
		},
		async onRefresh() {
			try {
				const { data } = await getArticles({
					channel_id: this.active,
					timestamp : this.timestamp++,
					with_top  : 1
				});
				this.articles.unshift(...data.results);
				this.isRefresh = false;
				console.log(data);
				this.checkCover();
				this.refreshSuccessText = `更新了${data.results.length}条数据`;
			}
			catch (e) {
				this.$toast.fail(e.message);
			}
		}
	},
	created() {
		console.log(this.active);
	}
};
</script>

<style lang="scss" scoped></style>
