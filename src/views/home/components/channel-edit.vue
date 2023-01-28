<template>
  <div class="channel-edit">
    频道编辑
    <van-cell slot="title" center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button type="danger" size="small" round plain>保存</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="value in 8"
        :key="value"
        text="文字"
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
export default { name: "ChannelEdit" };
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
