<template>
  <div class="lm-top-list" v-loading="loading">
    <lm-scroll>lm-top-list</lm-scroll>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { toplistDetail } from '@/api/music-api'
import LmScroll from '@/components/base/scroll-yes/lm-scroll.vue'

const list = ref([])
toplistDetail().then((res) => {
  list.value = res.list
})

const loading = computed(() => {
  return !list.value.length
})
</script>

<style scoped lang="scss">
.lm-top-list {
  height: calc(100vh - 88px);
  overflow: hidden;
}
</style>
