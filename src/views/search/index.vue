<template>
	<div class="search-container">
		<!--搜索栏-->
		<!--    在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。-->
		<form action="/">
			<van-search
				v-model="searchText"
				input-align="center"
				@search="onSearch(searchText)"
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
		<search-suggestion
			@search="onSearch"
			v-else-if="searchText"
			:search-text="searchText"
		/>
		<!--历史记录-->
		<search-history v-else :search-histories="searchHistory" />
	</div>
</template>

<script>
import searchSuggestion from "./components/searchSuggestion";
import searchHistory from "./components/searchHistory";
import searchResult from "./components/searchResult";
import { getItem, setItem } from "@/utils/storage";
import { getSearchHistories } from "@/api";
import { mapState } from "vuex";

export default {
	name: "searchIndex",
	data() {
		return {
			// 搜索关键词
			searchText   : "",
			//控制搜索结果的显示状态
			showResult   : false,
			//搜索历史记录
			searchHistory: getItem("searchHistory") || []
		};
	},
	components: {
		searchSuggestion,
		searchHistory,
		searchResult
	},
	created() {
		this.lodaSearchHistory();
	},
	methods: {
		async lodaSearchHistory() {
			//将线上与本地的搜索历史记录合并
			//如果用户登录
			let localHistory = getItem("searchHistory") || [];
			if (this.token) {
				const { data } = await getSearchHistories();
				console.log(data.keywords + "历史记录");
				//去重,去除空字符串
				localHistory = [...new Set([...data.keywords, ...localHistory])].filter((item) => item);
				console.log(this.searchHistory);
			}
			this.searchHistory = localHistory;
		},
		onSearch(searchText) {
			// 显示搜索结果
			this.showResult = true;
			this.searchText = searchText;
			//将搜索关键字添加到搜索历史记录中,如有重复将其排到最前面
			this.searchHistory = [
				searchText,
				...this.searchHistory.filter((item) => item !== searchText)
			];
			//将搜索历史记录存储到本地
			setItem("searchHistory", this.searchHistory);
		}
	},
	computed: {
		//用户token
		...mapState({ token: (state) => state.token.user })
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
