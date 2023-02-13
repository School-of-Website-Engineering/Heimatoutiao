<template>
	<div class="search-container">
		<!--搜索栏-->
		<!--    在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。-->
		<form action="/">
			<van-search
				v-model="value"
				input-align="center"
				@search="onSearch"
				@cancel="$router.back()"
				show-action
				placeholder="请输入搜索关键词"
			/>
		</form>
		<!--联想建议-->
		<search-suggestion />
		<!--历史记录-->
		<search-history />
		<!--搜索结果-->
    <search-result />
	</div>
</template>

<script>
import searchSuggestion from "./components/searchSuggestion";
import searchHistory from "./components/searchHistory";
import searchResult from "./components/searchResult";

export default {
	name: "searchIndex",
	data() {
		return { value: "" };
	},
	components: {
		searchSuggestion,
		searchHistory,
		searchResult
	},
	methods: {
		onSearch() {
			console.log("onSearch");
		}
	}
};
</script>

<style lang="scss" scoped>
.search-container {
}
</style>
