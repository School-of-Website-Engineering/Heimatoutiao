<template>
	<div>
		<van-cell title="全部评论"></van-cell>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
		>
			<comment-item
				v-for="(comment, index) in list"
				:key="index"
				:comment="comment"
        @reply-click="$emit('reply-click', $event)"
			></comment-item>
		</van-list>
	</div>
</template>

<script>
import { getComments } from "@/api";
import CommentItem from "@/views/article/components/comment-item.vue";
export default {
	name      : "CommentList",
	components: { CommentItem },
	props     : {
		source: {
			type    : [String, Number, Object],
			required: true
		}
	},
	data() {
		return {
			loading : false,
			finished: false,
			// 下一页页码
			offset  : null,
			//每页条数
			limit   : 10,
			list    : []
		};
	},
	methods: {
		async onLoad() {
			// 1.请求数据
			const { data } = await getComments({
				type  : "a",
				source: this.source,
				offset: this.offset,
				limit : this.limit
			});
			this.$emit("update-total-count", data.total_count);
			console.log(data);
			//2.把数据添加到list中
			const { results } = data;
			this.list = [...this.list, ...results];
			this.loading = false;
			// 3.判断是否还有更多数据
			// 4.设置loading和finished
			if (results.length) {
				//获取下一页数据条码
				this.offset = data.last_id;
			}
			else {
				this.finished = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
