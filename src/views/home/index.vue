<template>
  <div class="home-container">
    <van-nav-bar class="app-nav-bar">
      <van-button
        slot="title"
        icon="search"
        type="info"
        class="search-btn"
        round
        size="small"
        >搜索
      </van-button>
    </van-nav-bar>
    <!-- 文章频道列表 -->
    <van-tabs v-model="active" class="tbs-box">
      <van-tab
        class="tab-btn"
        v-for="item in channels"
        :title="item.name"
        :key="item.id"
      >
        <!-- 文章列表 -->
        <articleList :channels="channels" :active="active" />
      </van-tab>
      <div class="right-nav" slot="nav-right" @click="isChannelEditShow = true">
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- 频道编辑 -->
    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      class="popup-isChannelEditShow"
      closeable
      get-container="body"
    >
      <channel-edit
        @close="isChannelEditShow = false"
        @switchChannel="active = $event"
        :user-channels="channels"
      ></channel-edit>
    </van-popup>
  </div>
</template>

<script>
import { getUserChannels } from "@/api";
import ArticleList from "./components/article-list.vue";
import ChannelEdit from "@/views/home/components/channel-edit.vue";

export default {
	name      : "Home",
	components: { ChannelEdit, ArticleList },
	data() {
		return {
			// 当前选中的频道
			active           : 0,
			// 频道列表
			channels         : [],
			// 是否显示频道编辑弹窗
			isChannelEditShow: true
		};
	},
	created() {
		this.loadChannels();
	},
	methods: {
		// 加载频道列表
		async loadChannels() {
			try {
				const { data } = await getUserChannels();
				this.channels = data.channels;
				console.log(this.channels);
			}
			catch (error) {
				this.$toast.fail("用户登录信息已过期请退出登录后重新登录"),
				console.log(error.response.data.message);
			}
		},
	}
};
</script>

<style scoped lang="scss">
.home-container {
  ::v-deep .van-nav-bar__title {
    max-width: unset;
  }

  .app-nav-bar {
    .search-btn {
      width: 277px;
      height: 32px;
      background-color: #5babfb;
      font-size: 14px;
      color: #ffffff;
      border: none;

      .van-icon-search {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
}

::v-deep.tbs-box {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  height: 570px;
  width: 100%;
  overflow-y: auto;
}

::v-deep .van-tabs--line .van-tabs__wrap {
  position: sticky;
  top: 0;
  z-index: 999;
}

::v-deep .van-tab {
  border-right: 1px solid #edeff3;
  border-bottom: 1px solid #edeff3;
  padding: 0 20px 0 20px;
}

::v-deep .van-tabs__line {
  background-color: #3296fa !important;
  width: 18px !important;
  height: 3px !important;
}

.popup-isChannelEditShow {
  height: 100%;
}

.right-nav {
  position: fixed;
  top: 45px;
  right: -10px;
  width: 43px;
  line-height: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(#fff, 0.9);
  border-left: 1px solid #edeff3;
  z-index: 999;

  .van-icon {
    font-size: 24px;
  }
}
</style>
