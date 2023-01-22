<template>
	<div>
		<van-nav-bar
			title="登录"
			left-arrow
			@click-left="onClickLeft($router.back())"
		/>
		<!-- 登录 -->
		<van-cell-group>
			<van-field
				v-model="user.mobile"
				icon-prefix="iconfont icon"
				left-icon="shouji"
				right-icon="warning-o"
				placeholder="请输入手机号"
			/>
			<van-field
				v-model="user.code"
				clearabled
				icon-prefix="iconfont icon"
				left-icon="yanzhengma"
				placeholder="请输入验证码"
			>
				<template #button>
					<van-button size="small" round class="send-msg"
						>获取验证码
					</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<div class="login-container">
			<van-button class="but-login" type="info" block @click="onLogin"
				>登录
			</van-button>
		</div>
	</div>
</template>

<script>
import { getLogin } from "@/api";

export default {
	name: "Login",
	data() {
		return {
			user: {
				mobile: "13911111111",
				code  : "246810"
			}
		};
	},
	methods: {
		async onLogin() {
			this.$toast.loading({
				message    : "加载中...",
				forbidClick: true,
				duration   : 0
			});
			try {
				const { data: res } = await getLogin(this.user);
				this.$toast.success("登录成功");
				console.log(res);
			}
			catch (error) {
				console.log(error);
				this.$toast.fail("登录失败,手机号或验证码错误");
			}
		}
	}
};
</script>

<style scoped lang="scss">
.login-container {
	.but-login {
		width: 90%;
		margin: 14px auto;
		background-color: #6db4fb;
		border: none;
	}
}

.send-msg {
	background-color: #ededed;
	width: 80px;
	height: 23px;

	.van-button__text {
		font-size: 11px;
		color: #666666;
	}
}
</style>
