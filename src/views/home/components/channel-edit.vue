<template>
  <div class="channel-edit">
    频道编辑
    <van-cell slot="title" center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button type="danger" size="small" round plain>保存</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-cell slot="title" center :border="false">
      <div slot="title" class="channel-title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
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
}
</style>
