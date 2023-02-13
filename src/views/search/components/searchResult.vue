<template>
	<div class="search-result">
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
		>
			<van-cell
				v-for="(item, index) in list"
				:key="index"
				:title="item.title"
			/>
		</van-list>
	</div>
</template>

<script>
import { getSearchResults } from "@/api";

export default {
	name: "searchResult",
	data() {
		return {
			list    : [],
			loading : false,
			finished: false,
			//页码
			page    : 1,
			//每页条数
			perPage : 10
		};
	},
	props: {
		searchText: {
			type    : String,
			required: true,
			default : ""
		}
	},
	methods: {
		async onLoad() {
			const { data } = await getSearchResults({
				//页码
				page    : this.page,
				//每页条数
				per_page: this.perPage,
				//搜索关键字
				q       : this.searchText
			});
			//将搜索结果添加到list中
			const { results } = data;
			this.list.push(...results);
			//关闭loading
			this.loading = false;
			//判断是否还有更多数据
			if (results.length) {
				this.page++;
			}
			else {
				//没有更多数据
				this.finished = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.search-result {
}
</style>
