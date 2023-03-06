<template>
  <div class="lm-slide">
    <div class="slide-wrapper" ref="slideRef">
      <div class="slide-content">
        <div class="slide-page" v-for="item in data" :key="item.bannerId">
          <img :src="item.pic" :alt="item.pic" />
        </div>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in data"
        :key="item.bannerId"
        :class="{ active: currentPageIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useSlide from '@/components/base/slide/use-slide'

defineProps(['data'])

const slideRef = ref(null)
const { currentPageIndex } = useSlide(slideRef)
</script>

<style scoped lang="scss">
.lm-slide {
  position: relative;
  .slide-wrapper {
    min-height: 1px;
    overflow: hidden;
    height: 100%;
  }
  .slide-content {
    height: 100%;
    white-space: nowrap;
    font-size: 0;
    .slide-page {
      display: inline-block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
