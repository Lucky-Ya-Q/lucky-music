<template>
  <div class="lm-recommend" v-loading="loading">
    <lm-scroll>
      <lm-slide v-if="banners.length" :data="banners"></lm-slide>
      <div class="recommend-list">
        <h1 class="list-title" v-if="playlists.length">热门歌单推荐</h1>
        <ul class="list-content">
          <li class="item" v-for="item in playlists" :key="item.id">
            <div class="img">
              <img v-lazy="item.coverImgUrl" alt="item.coverImgUrl" />
            </div>
            <div class="text">
              <h2 class="name">{{ item.creator.nickname }}</h2>
              <p class="description">{{ item.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </lm-scroll>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { banner, topPlaylist } from '@/api/music-api'
import LmSlide from '@/components/base/slide/lm-slide.vue'
import LmScroll from '@/components/base/scroll-yes/lm-scroll.vue'

const banners = ref([])
banner({ type: 1 }).then((res) => {
  banners.value = res.banners.filter((item) => {
    // 过滤掉广告
    return item.targetType !== 3000
  })
})

const playlists = ref([])
topPlaylist().then((res) => {
  playlists.value = res.playlists
})

const loading = computed(() => {
  return !(banners.value.length && playlists.value.length)
})
</script>

<style scoped lang="scss">
.lm-recommend {
  height: calc(100vh - 88px);
  overflow: hidden;

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
    }

    .list-content {
      .item {
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;
        .img {
          width: 60px;
          height: 60px;
        }
        .text {
          margin-left: 20px;
          font-size: $font-size-medium;
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .description {
            color: $color-text-d;
          }
        }
      }
    }
  }
}
</style>
