<template>
	<div class="login-box">
		<van-nav-bar
			title="登录"
			left-arrow
			@click-left="onClickLeft($router.back())"
		/>
		<!-- 登录 -->
		<van-form
			@submit="onLogin"
			:show-error="false"
			:show-error-message="false"
			@failed="onFailed"
			validate-first
			ref="login-form"
		>
			<van-field
				v-model="user.mobile"
				icon-prefix="iconfont icon"
				left-icon="shouji"
				right-icon="warning-o"
				placeholder="请输入手机号"
				:rules="formRules.mobile"
				name="mobile"
			/>
			<van-field
				v-model="user.code"
				clearabled
				icon-prefix="iconfont icon"
				left-icon="yanzhengma"
				placeholder="请输入验证码"
				:rules="formRules.code"
				name="code"
			>
				<template #button>
					<van-button
						native-type="button"
						size="small"
						round
						class="send-msg"
						@click="onSendSms"
						>获取验证码
					</van-button>
				</template>
			</van-field>
			<!-- 登录按钮 -->
			<div class="login-container">
				<van-button class="but-login" type="info" block
					>登录
				</van-button>
			</div>
		</van-form>
		<span>手机号:13911111111</span>
		<span>验证码:246810</span>
	</div>
</template>

<script>
import { getLogin, getSendSms } from "@/api";

export default {
	name: "Login",
	data() {
		return {
			user: {
				mobile: "13911111111",
				code  : "246810"
			},
			formRules: {
				mobile: [
					{ required: true, message: "请输入手机号" },
					{
						pattern: /^1[3456789]\d{9}$/,
						message: "手机号格式不正确"
					}
				],
				code: [
					{ required: true, message: "请输入验证码" },
					{ pattern: /^\d{6}$/, message: "验证码不正确" }
				]
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
		},
		onFailed(error) {
			if (error.errors[0]) {
				this.$toast({
					message : error.errors[0].message,
					position: "top"
				});
			}
		},
		async onSendSms() {
			try {
				//验证成功
				await this.$refs["login-form"].validate("mobile");
				const res = await getSendSms(this.user.mobile);
				console.log(res);
			}
			catch (error) {
				//验证失败
				let message = "";
				error && error.response && error.response.status === 429
					? //发送短信失败
					  (message = "验证码发送过于频繁,请稍后再试")
					: error.name === "mobile"
						? //手机号验证失败
					  (message = error.message)
						: (message = "出现未知错误，验证码发送失败，请稍后再试");

				this.$toast({
					message,
					position: "top"
				});
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
::v-deep .iconfont {
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.login-box {
	& > span {
		display: block;
		text-align: center;
		font-size: 14px;
		color: #666666;
	}
}
</style>
