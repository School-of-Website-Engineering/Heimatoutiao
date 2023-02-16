<template>
	<div class="user-profile">
		<!-- 导航栏 -->
		<van-nav-bar title="个人信息" left-arrow @click-left="$router.back()" />
		<van-cell title="头像" center is-link>
			<van-image
				:src="userProfile.photo"
				round
				fit="cover"
				width="30"
				height="30"
			/>
		</van-cell>
		<van-cell title="昵称" is-link :value="userProfile.name"></van-cell>
		<van-cell
			title="性别"
			is-link
			:value="userProfile.gender === 0 ? '男' : '女'"
		></van-cell>
		<van-cell title="生日" is-link :value="userProfile.birthday"></van-cell>
	</div>
</template>

<script>
import { getUserProfile } from "@/api";
export default {
	name: "UserProfile",
	data() {
		return {
			// 个人信息
			userProfile: {},
		};
	},
	created() {
		this.loadUserProfile();
	},
	methods: {
		async loadUserProfile() {
			const { data } = await getUserProfile();
			this.userProfile = data;
			console.log(data);
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep .van-nav-bar .van-icon {
	color: #fff;
}
</style>
