<template>
  <lm-slide v-if="banners.length" :data="banners"></lm-slide>
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
.lm-slide {
  height: 160px;
}
</style>
