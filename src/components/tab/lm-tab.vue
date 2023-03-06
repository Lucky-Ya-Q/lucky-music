<template>
  <div class="lm-tab">
    <router-link class="tab-link" v-for="item in tabs" :key="item.path" :to="item.path">
      <span class="tab-item">
        {{ item.name }}
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref([
  {
    name: '推荐',
    path: '/recommend'
  },
  {
    name: '歌手',
    path: '/singer'
  },
  {
    name: '排行',
    path: '/top-list'
  },
  {
    name: '搜索',
    path: '/search'
  }
])
</script>

<style scoped lang="scss">
.lm-tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: $font-size-medium;

  .tab-link {
    flex: 1;

    .tab-item {
      color: $color-text-l;
      padding-bottom: 5px;
    }

    &.router-link-active {
      .tab-item {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
