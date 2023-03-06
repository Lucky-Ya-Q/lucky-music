<template>
  <div class="lm-recommend">
    <lm-slide v-if="banners.length" :data="banners"></lm-slide>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { banner } from '@/api/music-api'
import LmSlide from '@/components/base/slide/lm-slide.vue'

const banners = ref([])
banner({ type: 1 }).then((res) => {
  banners.value = res.banners.filter((item) => {
    // 过滤掉广告
    return item.targetType !== 3000
  })
})
</script>

<style scoped lang="scss">
.lm-recommend {
  .lm-slide {
    height: 160px;
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
      font-weight: normal;
    }
  }
}
</style>
