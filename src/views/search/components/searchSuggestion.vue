<template>
	<div class="search-suggestion">
		<van-cell
			v-for="(item, index) in searchList"
			:key="index"
			class="search-item"
			icon="search"
			:title="item"
		>
		</van-cell>
	</div>
</template>

<script>
import { getSearchSuggestions } from "@/api";

export default {
	name: "searchSuggestion",
	data() {
		return {
			// 搜索建议列表
			searchList: []
		};
	},
	props: {
		searchText: {
			type    : String,
			required: true
		}
	},
	watch: {
		//监听searchText的变化
		searchText: {
			async handler() {
				//获取搜索建议
				const { data } = await getSearchSuggestions(this.searchText);
				console.log(data);
				this.searchList = data.options;
			},
			//该属性为true时，会立即执行一次回调函数
			immediate: true
		}
	}
};
</script>

<style lang="scss" scoped>
.search-suggestion {
	.search-item {
		font-size: 10px;
	}
}
</style>
