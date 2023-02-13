<!--搜索历史-->
<template>
	<!-- 搜索历史 -->
	<div class="search-history">
		<van-cell title="搜索历史">
			<div class="delete">
				<span>全部删除</span>
				&nbsp;&nbsp;
				<span>完成</span>
			</div>
			<!--      <van-icon name="delete" />-->
		</van-cell>
		<van-cell title="hello">
			<van-icon name="close" />
		</van-cell>
	</div>
</template>

<script>
export default { name: "searchHistory" };
</script>

<style lang="scss" scoped>
.search-history {
	.delete {
	}
}
</style>
