<template>
	<div class="search-container">
		<!--搜索栏-->
		<!--    在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。-->
		<form action="/">
			<van-search
				v-model="searchText"
				input-align="center"
				@search="onSearch"
				@cancel="$router.back()"
				show-action
				@focus="showResult = false"
				placeholder="请输入搜索关键词"
			/>
		</form>
		<!--搜索结果-->
		<search-result
			class="search-result"
			v-if="showResult"
			:search-text="searchText"
		/>
		<!--联想建议-->
		<search-suggestion v-else-if="searchText" :search-text="searchText" />
		<!--历史记录-->
		<search-history v-else />
	</div>
</template>

<script>
import searchSuggestion from "./components/searchSuggestion";
import searchHistory from "./components/searchHistory";
import searchResult from "./components/searchResult";

export default {
	name: "searchIndex",
	data() {
		return {
			// 搜索关键词
			searchText: "",
			//控制搜索结果的显示状态
			showResult: false
			//
		};
	},
	components: {
		searchSuggestion,
		searchHistory,
		searchResult
	},
	methods: {
		onSearch() {
			// 显示搜索结果
			this.showResult = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.search-container {
	.search-result {
		position: fixed;
		top: 53px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: auto;
	}
}
</style>
