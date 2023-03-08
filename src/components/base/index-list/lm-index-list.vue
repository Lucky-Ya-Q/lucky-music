<template>
  <lm-scroll>
    <ul>
      <li v-for="group in artists" :key="group.title">
        <h2 class="title">{{ group.title }}</h2>
        <ul class="content">
          <li class="item" v-for="item in group.list" :key="item.id">
            <img class="img" v-lazy="item.picUrl" :alt="item.picUrl" />
            <span class="text">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </lm-scroll>
</template>

<script setup>
import LmScroll from '@/components/base/scroll-yes/lm-scroll.vue'

defineProps(['artists'])
</script>

<style scoped lang="scss">
.title {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  font-size: $font-size-small;
  color: $color-text-l;
  background-color: $color-highlight-background;
}
.content {
  padding: 10px 0;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .text {
    margin-left: 20px;
    color: $color-text-l;
    font-size: $font-size-medium;
  }
}
</style>
