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
				center
			/>
			<van-field
				v-model="user.code"
				clearabled
				icon-prefix="iconfont icon"
				left-icon="yanzhengma"
				placeholder="请输入验证码"
				:rules="formRules.code"
				name="code"
				center
			>
				<template #button>
					<van-count-down
						v-if="isCountDown"
						:time="1000 * 60"
						format="ss秒后重试"
						@finish="isCountDown = false"
					/>
					<van-button
						v-else
						native-type="button"
						size="small"
						round
						class="send-msg"
						@click="onSendSms"
						:disabled="isSendSmsLoading"
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
import { mapMutations } from "vuex";

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
			},
			//短信验证码倒计时状态
			isCountDown     : false,
			//发送短信验证码按钮的状态
			isSendSmsLoading: false
		};
	},
	methods: {
		...mapMutations({ setUser: "token/setUser" }),
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
				//vuex存储token
				this.setUser(res);
				//跳转到
				await this.$router.push("/my");
			}
			catch (error) {
				console.log(error);
				this.$toast.fail(error.message);
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
				//节流
				this.isSendSmsLoading = true;
				const res = await getSendSms(this.user.mobile);
				//倒计时
				this.isCountDown = true;
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
			this.isSendSmsLoading = false;
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
::v-deep.login-box {
	& > span {
		display: block;
		text-align: center;
		font-size: 14px;
		color: #666666;
	}
	.van-count-down {
		font-size: 12px;
	}
  .van-nav-bar .van-icon{
    color: #fff;
  }
}
</style>
