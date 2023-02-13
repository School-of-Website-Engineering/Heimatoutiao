<template>
  <div class="search-suggestion">
    <van-cell class="search-item" icon="search" title="搜索建议">
    </van-cell>
    <van-cell class="search-item" icon="search" title="搜索建议">
    </van-cell>
    <van-cell class="search-item" icon="search" title="搜索建议">
    </van-cell>
  </div>
</template>

<script>
import { watch } from "vue";

export default {
	name : "searchSuggestion",
	props: {
		searchText: {
			type    : String,
			required: true
		}
	},
	watch: {
    //监听searchText的变化
		searchText: {
			handler: function(newVal, oldVal) {
				console.log("searchText changed from " + oldVal + " to " + newVal);
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
