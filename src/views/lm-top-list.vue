<template>
  <div class="lm-top-list" v-loading="loading">
    <lm-scroll>
      <ul style="padding: 10px 0">
        <li class="group" v-for="group in list" :key="group.id">
          <img class="img" v-lazy="group.coverImgUrl" :alt="group.coverImgUrl" />
          <ul class="content">
            <li class="item" v-for="(item, index) in group.tracks" :key="index">
              {{ index + 1 }}. {{ item.al.name }} -
              <template v-for="(ar, index) in item.ar" :key="ar.id">
                {{ ar.name }}{{ index === item.ar.length - 1 ? '' : '/' }}
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </lm-scroll>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { playlistTrackAll, toplist } from '@/api/music-api'
import LmScroll from '@/components/base/scroll-yes/lm-scroll.vue'

const list = ref([])
toplist().then((res) => {
  list.value = res.list

  list.value.forEach((item) => {
    playlistTrackAll({ id: item.id, limit: 3 }).then((res) => {
      item.tracks = res.songs
    })
  })
})

const loading = computed(() => {
  return !list.value.length
})
</script>

<style scoped lang="scss">
.lm-top-list {
  height: calc(100vh - 88px);
  overflow: hidden;
  .group {
    padding: 10px 20px;
    display: flex;
    .img {
      width: 100px;
      height: 100px;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      height: 100px;
      overflow: hidden;
      background: $color-highlight-background;
      color: $color-text-d;
      font-size: $font-size-small;
      .item {
        @include no-wrap();
        line-height: 26px;
      }
    }
  }
}
</style>
