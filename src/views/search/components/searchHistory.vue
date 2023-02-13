<!--搜索历史-->
<template>
	<!-- 搜索历史 -->
	<div class="search-history">
		<van-cell title="搜索历史">
			<div class="delete" v-if="showDelete">
				<span @click="$emit('deleteAll',[])">全部删除</span>
				&nbsp;&nbsp;
				<span @click="showDelete = false">完成</span>
			</div>
			<van-icon v-else name="delete" @click="showDelete = true" />
		</van-cell>
		<van-cell
			v-for="(item, index) in searchHistories"
			:key="index"
			:title="item"
			@click="onDelete(item, index)"
		>
			<van-icon name="close" v-show="showDelete" />
		</van-cell>
	</div>
</template>

<script>
import {setItem} from "@/utils/storage";

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
	},
	methods: {
		// 删除搜索历史
		onDelete(index) {
			// 如果显示删除按钮，则删除搜索历史
			if (this.showDelete) {
				// eslint-disable-next-line vue/no-mutating-props
				this.searchHistories.splice(index, 1);
				// 将删除后的搜索历史记录存储到本地,如果用户登录，则将删除后的搜索历史记录存储到服务器
				setItem("searchHistory", this.searchHistories);
			}
			else {
				//非删除状态，展示搜索结果
				this.$emit("search", index);
			}
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
