<template>
	<van-cell title="123" class="comment-item"> </van-cell>
</template>

<script>
export default {
	name: "CommentItem",
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
