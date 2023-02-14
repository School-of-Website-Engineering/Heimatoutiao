<template>
	<!--顶部-->
	<div>
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
				>{{ article.is_followed ? "已关注" : "关注" }}</van-button
			>
		</van-cell>
		<div class="content markdown-body" v-html="article.content"></div>
	</div>
</template>

<script>
import "./github-markdown-light.css";
import { getArticle } from "@/api";

export default {
	name: "Artice",
	data() {
		return {
			//文章数据对象
			article: {}
		};
	},
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
		async loadArticle() {
			const { data } = await getArticle(this.articleId);
			console.log("---------------文章数据↓-----------------");
			console.log(data);
			this.article = data;
			this.replaceAutPhoto();
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
