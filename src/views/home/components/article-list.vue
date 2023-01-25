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
				<van-cell
					v-for="item in articles"
					:key="item.id"
					:title="item.title"
				/>
			</van-list>
		</van-pull-refresh>
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
		//当前时间戳
		async onLoad() {
			try {
				const { data } = await getArticles({
					channel_id: this.channels[0].id,
					timestamp : this.timestamp++,
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
				console.log(data);
				console.log(this.timestamp);
			}
			catch (e) {
				this.$toast.fail(e.message);
			}
		},
		async onRefresh() {
			try {
				const { data } = await getArticles({
					channel_id: this.channels[0].id,
					timestamp : this.timestamp++,
					with_top  : 1
				});
				this.articles.unshift(...data.results);
				this.isRefresh = false;
				console.log(data);
				this.refreshSuccessText = `更新了${data.results.length}条数据`;
			}
			catch (e) {
				this.$toast.fail(e.message);
			}
		}
	},
	created() {}
};
</script>

<style lang="scss" scoped></style>
