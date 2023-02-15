<template>
	<div>
		<!--顶部-->
		<van-nav-bar title="文章详情" left-arrow @click-left="$router.back()" />
		<h1 class="title">{{ article.title }}</h1>
		<van-cell class="user-info" center>
			<div class="name" slot="title">{{ article.aut_name }}</div>
			<van-image
				slot="icon"
				round
				fit="cover"
				class="user-avatar"
				:src="article.aut_photo"
			/>
			<div slot="label" class="time">
				{{ article.pubdate | relativeTime }}
			</div>
			<van-button
				:type="article.is_followed ? 'default' : 'info'"
				round
				size="small"
				class="right-btn"
				:icon="article.is_followed ? '' : 'plus'"
				@click="onFollow"
				:loading="isFollowLoading"
				>{{ article.is_followed ? "已关注" : "关注" }}
			</van-button>
		</van-cell>
		<div
			class="content markdown-body"
			v-html="article.content"
			ref="article-content"
		></div>
		<!-- 底部区域 -->
		<div class="article-bottom">
			<van-button class="comment-btn" type="default" round size="small"
				>写评论</van-button
			>
			<van-icon name="comment-o" info="123" color="#777"></van-icon>
			<van-icon
				:name="article.is_collected ? 'star' : 'star-o'"
				:color="article.is_collected ? 'orange' : '#777'"
				@click="onCollect"
			></van-icon>
			<van-icon name="good-job-o" color="#777"></van-icon>
			<van-icon name="share" color="#777"></van-icon>
		</div>
	</div>
</template>

<script>
import "./github-markdown-light.css";
import {
	getArticle,
	addFollow,
	deleteFollow,
	addCollect,
	deleteCollect
} from "@/api";
import { ImagePreview } from "vant";

export default {
	name: "Artice",
	data() {
		return {
			//文章数据对象
			article         : {},
			//关注用户的按钮
			isFollowLoading : false,
			//收藏文章的按钮
			isCollectLoading: false
		};
	},
	created() {
		this.loadArticle();
		console.log("--------------原始content↓------------------");
	},
	props: {
		articleId: {
			type    : [String, Number, Object],
			required: true
		}
	},
	methods: {
		//关注用户
		async onFollow() {
			this.isFollowLoading = true;
			if (this.article.is_followed) {
				//已关注，取消关注
				await deleteFollow(this.article.aut_id);
				this.$toast("已取消关注");
			}
			else {
				//未关注,添加关注
				await addFollow(this.article.aut_id);
				this.$toast("已关注");
			}
			this.article.is_followed = !this.article.is_followed;
			this.isFollowLoading = true;
		},
		//收藏文章
		async onCollect() {
			this.isCollectLoading = true;
			if (this.article.is_collected) {
				//已收藏，取消收藏
				await deleteCollect(this.articleId);
				this.$toast.success("已取消收藏");
			}
			else {
				//未收藏,添加收藏
				await addCollect(this.articleId);
				this.$toast.success("已收藏");
			}
			this.article.is_followed = !this.article.is_followed;
			this.isCollectLoading = true;
		},

		//文章详情z
		async loadArticle() {
			const { data } = await getArticle(this.articleId);
			console.log("---------------文章数据↓-----------------");
			console.log(data);
			this.article = data;
			//替换头像
			this.replaceAutPhoto();
			//替换图片
			this.replaceContentImg();
			console.log(this.article.content);

			//图片预览
			this.$nextTick(() => {
				this.handlePerviewImage();
			});
			//调用预览
		},
		handlePerviewImage() {
			//获取dom
			const articleContentDom = this.$refs["article-content"];
			console.log(articleContentDom);
			//得到img
			const imgs = articleContentDom.querySelectorAll("img");
			console.log(imgs);
			const imgPaths = [];
			//循环注册事件
			imgs.forEach((img, index) => {
				//每循环一次将src添加到数组
				imgPaths.push(img.src);
				img.onclick = function() {
					ImagePreview({
						images       : imgPaths,
						startPosition: index
					});
				};
			});
		},
		//随机返回一张图片
		replaceAutPhoto() {
			let photos = [
				"https://img01.yzcdn.cn/vant/cat.jpeg",
				"https://img01.yzcdn.cn/vant/logo.png",
				"https://static.wikia.nocookie.net/fcs-vs-battle/images/3/35/ASDFGuy_Vector.png/revision/latest?cb=20201113171318",
				"https://www.aplpackaging.co.uk/wp-content/uploads/2019/12/mailingbox-brown-310x240x114-000-300x300.jpg"
			];
			let randomIndex = Math.floor(Math.random() * photos.length);
			this.article.aut_photo = photos[randomIndex];
		},
		//如果this.article.content中包含'"//upload-images'字符，则从该字符开始删除，一直删到带有'"'字符时结束，并将删除的字符替换为"https://img01.yzcdn.cn/vant/cat.jpeg"
		//正则实现,以此类推
		replaceContentImg() {
			this.article.content = this.article.content.replace(
				/\/\/upload-images.*?['"]/g,
				"https://img01.yzcdn.cn/vant/cat.jpeg"
			);
			this.article.content = this.article.content.replace(
				/src=".*?['"]/g,
				"src=\"https://img01.yzcdn.cn/vant/cat.jpeg\""
			);
			this.article.content = this.article.content.replace(
				/data-original-src=".*?['"]/g,
				"src=\"https://img01.yzcdn.cn/vant/cat.jpeg\""
			);
		}
	}
};
</script>

<style lang="scss" scoped>
.markdown-body {
	padding: 14px;
	background-color: #fff;

	ul {
		list-style: rean-hanja-informal;
	}
	padding-bottom: 100px;
}
//底部评论区，水平垂直居中平分排列
.article-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 14px;
	background-color: #fff;
	//固定在底部
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	.comment-btn {
		color: #ccc;
		width: 120px;
		height: 25px;
	}
}

.user-info {
	.name {
		font-size: 12px;
		color: #333;
	}

	.time {
		font-size: 11px;
		color: #b4b4b4;
	}

	.user-avatar {
		width: 35px;
		height: 35px;
		margin-right: 8px;
	}

	.right-btn {
		width: 85px;
		height: 29px;
	}
}

::v-deep .van-nav-bar .van-icon {
	color: #fff;
}

.title {
	text-align: center;
	font-size: 20px;
	color: #333;
	padding: 14px;
	background-color: #fff;
	margin: 0;
}
</style>
