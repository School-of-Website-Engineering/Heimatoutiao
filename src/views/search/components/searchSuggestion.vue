<template>
	<div class="search-suggestion">
		<van-cell
			v-for="(item, index) in searchList"
			:key="index"
			class="search-item"
			icon="search"
		>
			<div slot="title" v-html="highlight(item)"></div>
		</van-cell>
	</div>
</template>

<script>
import { getSearchSuggestions } from "@/api";
import { debounce } from "lodash";

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
			//使用lodash的防抖函数
			handler: debounce(async function() {
				//获取搜索建议
				const { data } = await getSearchSuggestions(this.searchText);
				console.log(data);
				this.searchList = data.options;
			}, 500),
			//该属性为true时，会立即执行一次回调函数
			immediate: true
		}
	},
	methods: {
		highlight(item) {
			return item.replace(
				//正则表达式，匹配搜索关键字
				new RegExp(this.searchText, "gi"),
				//匹配到的关键字替换成红色
				"<span style='color: red;'>$&</span>"
			);
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
