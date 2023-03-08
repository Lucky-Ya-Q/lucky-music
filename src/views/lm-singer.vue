<template>
  <div class="lm-singer" v-loading="loading">
    <lm-scroll>lm-singer</lm-scroll>
  </div>
</template>

<script setup>
import { topArtists } from '@/api/music-api'
import { computed, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import LmScroll from '@/components/base/scroll-yes/lm-scroll.vue'

const artists = ref([])
topArtists().then((res) => {
  artists.value = singerSortByName(res.artists)
})

const loading = computed(() => {
  return !artists.value.length
})

function singerSortByName(singers) {
  // 简化歌手数据
  const singerList = singers.map((item) => {
    return {
      name: item.name,
      picUrl: item.picUrl
    }
  })

  // 构造歌手 Map 数据结构
  const singerMap = {
    hot: {
      title: '热',
      list: singerList.slice(0, 10)
    },
    well: {
      title: '#',
      list: []
    }
  }

  singerList.forEach((item) => {
    const key = pinyin(item.name).slice(0, 1).toUpperCase()
    if (!key.match(/[a-zA-Z]/)) {
      singerMap.well.list.push(item)
      return
    }
    if (!singerMap[key]) {
      singerMap[key] = { title: key, list: [] }
    }
    singerMap[key].list.push(item)
  })

  // 热门歌手
  const hot = []
  // 字母歌手
  const letter = []
  // #号歌手
  const well = []

  for (const key in singerMap) {
    const item = singerMap[key]
    if (item.title === singerMap.hot.title) {
      hot.push(item)
    } else if (item.title === singerMap.well.title) {
      well.push(item)
    } else {
      letter.push(item)
    }
  }

  // 字母歌手排序
  letter.sort((a, b) => a.title.localeCompare(b.title))
  return hot.concat(letter).concat(well)
}
</script>

<style scoped lang="scss">
.lm-singer {
  height: calc(100vh - 88px);
  overflow: hidden;
}
</style>
