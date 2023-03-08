<template>
  <!-- 父容器 -->
  <div class="lm-scroll" ref="scrollRef">
    <!-- 第一个子元素 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useScroll from '@/components/base/scroll-yes/use-scroll'

const props = defineProps({
  click: {
    type: Boolean,
    default: true
  }
})

const scrollRef = ref(null)
useScroll(scrollRef, props)
</script>

<style scoped lang="scss">
.lm-scroll {
  overflow: hidden;
  height: 100%;
}
</style>
