<template>
  <div class="channel-edit">
    <van-cell slot="title" center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button type="danger" size="mini" round plain style="width: 58px"
        >编辑
      </van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channels, index) in userChannels"
        :key="index"
        :text="channels.name"
      />
    </van-grid>
    <van-cell slot="title" center :border="false">
      <div slot="title" class="channel-title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="value in 58"
        :key="value"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels } from "@/api";

export default {
	name : "ChannelEdit",
	props: {
		userChannels: {
			type    : Array,
			required: true
		}
	},
	data() {
		return {
			//所有频道
			allChannels: []
		};
	},
	created() {
		this.loadAllChannels();
	},
	methods: {
		// 获取所有频道
		async loadAllChannels() {
			const {data} = await getAllChannels();
			console.log(data);
      this.allChannels = data.channels;
		}
	}
};
</script>

<style lang="scss" scoped>
.channel-edit {
  margin-top: 54px;

  .channel-title {
    font-size: 16px;
    color: #333;
  }

  .grid-item {
    height: 43px;
    width: 80px;

    .van-grid-item__content {
      background-color: #f4f5f6;

      .van-grid-item__text {
        font-size: 14px;
        color: #222;
      }
    }
  }
}
</style>
