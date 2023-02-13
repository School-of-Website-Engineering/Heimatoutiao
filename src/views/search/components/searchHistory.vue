<!--搜索历史-->
<template>
	<!-- 搜索历史 -->
	<div class="search-history">
		<van-cell title="搜索历史">
			<div class="delete" v-if="showDelete">
				<span>全部删除</span>
				&nbsp;&nbsp;
				<span @click="showDelete = false">完成</span>
			</div>
			<van-icon v-else name="delete" @click="showDelete = true" />
		</van-cell>
		<van-cell
			v-for="(item, index) in searchHistories"
			:key="index"
			:title="item"
		>
			<van-icon name="close" v-show="showDelete" />
		</van-cell>
	</div>
</template>

<script>
export default {
	name: "searchHistory",
	data() {
		return {
			//是否显示删除按钮
			showDelete: false
		};
	},
	props: {
		searchHistories: {
			type    : Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.search-history {
	.delete {
	}
}
</style>
