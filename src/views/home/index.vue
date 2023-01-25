<template>
	<div class="home-container">
		<van-nav-bar class="app-nav-bar">
			<van-button
				slot="title"
				icon="search"
				type="info"
				class="search-btn"
				round
				size="small"
				>搜索</van-button
			>
		</van-nav-bar>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.home-container {
	::v-deep .van-nav-bar__title {
		max-width: unset;
	}
	.app-nav-bar {
		.search-btn {
			width: 277px;
			height: 32px;
			background-color: #5babfb;
			font-size: 14px;
			color: #ffffff;
      border: none;
      .van-icon-search{
        color: #ffffff;
        font-size: 16px;
      }
		}
	}
}
</style>
