<template>
	<div>
		<!--顶部-->
		<van-nav-bar title="文章详情" left-arrow @click-left="$router.back()" />
		<!-- 文章信息区域 -->
		<div class="article-wrap">
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
			<!-- 文章评论列表 -->
			<CommentList
				:source="articleId"
				@update-total-count="totalCommentCount = $event"
				@reply-click="onReplyClick"
			/>
		</div>
		<!-- 底部区域 -->
		<div class="article-bottom">
			<van-button
				class="comment-btn"
				type="default"
				round
				size="small"
				@click="showPost = true"
				>写评论</van-button
			>
			<van-icon
				name="comment-o"
				:info="totalCommentCount"
				color="#777"
			></van-icon>
			<van-icon
				:name="article.is_collected ? 'star' : 'star-o'"
				:color="article.is_collected ? 'orange' : '#777'"
				@click="onCollect"
			></van-icon>
			<van-icon
				:name="article.attitude === 1 ? 'good-job' : 'good-job-o'"
				:color="article.attitude === 1 ? 'hotpink' : '#777'"
				@click="onLike"
			></van-icon>
			<van-icon name="share" color="#777"></van-icon>
		</div>
		<!-- 发布评论 -->
		<van-popup v-model="showPost" position="bottom">
			<post-comment
				@on-post-success="onCommentSuccess"
				:articleId="articleId"
				:target="articleId"
			></post-comment>
		</van-popup>
		<!-- 评论恢复 -->
		<van-popup v-model="showReply" position="bottom">
			<CommentReply :comment="replyComment"></CommentReply>
		</van-popup>
	</div>
</template>

<script>
import "./github-markdown-light.css";
import CommentReply from "./components/comment-reply.vue";
import CommentList from "./components/comment-list.vue";
import PostComment from "./components/post-comment.vue";
import {
	getArticle,
	addFollow,
	deleteFollow,
	addCollect,
	deleteCollect,
	deleteLike,
	addLike
} from "@/api";
import { ImagePreview } from "vant";

export default {
	name: "ArticeIndex",
	data() {
		return {
			//文章数据对象
			article          : {},
			//关注用户的按钮
			isFollowLoading  : false,
			//收藏文章的按钮
			isCollectLoading : false,
			//显示发布评论的弹出层
			showPost         : false,
			//评论总数
			totalCommentCount: 0,
			//显示回复评论的弹出层
			showReply        : false,
			//回复评论的数据对象
			replyComment     : {}
		};
	},
	// eslint-disable-next-line vue/no-unused-components
	components: { CommentList, PostComment, CommentReply },
	created() {
		this.loadArticle();
	},
	props: {
		articleId: {
			type    : [String, Number, Object],
			required: true
		}
	},
	methods: {
		//点击回复评论
		onReplyClick(comment) {
			//展示回复评论的弹出层
			this.showReply = true;
			console.log(comment);
		},
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
			//禁止背景点击
			this.$toast.loading({
				forbidClick: true,
				message    : "加载中..."
			});
			this.isCollectLoading = true;
			if (this.article.is_collected) {
				//已收藏，取消收藏
				await deleteCollect(this.articleId);
			}
			else {
				//未收藏,添加收藏
				await addCollect(this.articleId);
			}
			this.article.is_followed = !this.article.is_followed;
			this.isCollectLoading = true;
			this.$toast.success(
				`${this.article.is_collected ? "取消" : ""}收藏成功`
			);
		},
		//点赞
		async onLike() {
			if (this.article.attitude === 1) {
				//已点赞，取消点赞
				await deleteLike(this.articleId);
				this.article.attitude = -1;
			}
			else {
				//未点赞,添加点赞
				await addLike(this.articleId);
				this.article.attitude = 1;
			}
			this.$toast.success(
				`${this.article.attitude === 1 ? "" : "取消"}点赞成功`
			);
		},

		//文章详情
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
		},
		//评论发布成功
		onCommentSuccess(comment) {
			this.$toast.loading({
				message    : "发布中...",
				forbidClick: true
			});
			this.replyComment = comment;
			console.log("评论成功");
			console.log(this.replyComment);
			//更新评论总数量
			this.totalCommentCount++;
			this.$toast.success("评论成功");
			this.showPost = false;
		}
	}
};
</script>

<style lang="scss" scoped>
//文章详情
.article-wrap {
	position: fixed;
	top: 46px;
	bottom: 50px;
	left: 0;
	right: 0;
	overflow: auto;
}
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
