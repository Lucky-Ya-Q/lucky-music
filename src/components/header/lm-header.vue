<template>
  <div class="lm-header">
    <div class="dropdown">
      <div class="dropdown-cover" v-if="show" @click="show = false"></div>
      <h1 class="title" @click="show = !show">Lucky Music</h1>
      <transition>
        <div class="content" v-if="show">
          <ul>
            <li>QQ音乐</li>
            <li>网易云音乐</li>
            <li>酷我音乐</li>
            <li>酷狗音乐</li>
          </ul>
        </div>
      </transition>
    </div>
    <router-link class="user-center" to="/user-center">
      <i class="iconfont icon-shoucang-"></i>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.lm-header {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;

  .dropdown {
    margin: 0 22px;
    position: relative;
    .dropdown-cover {
      position: fixed;
      z-index: 200;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .title {
      color: $color-theme;
      font-size: $font-size-large;
    }
    .content {
      position: absolute;
      z-index: 201;
      top: 22px;
      left: 10px;
      width: 100px;
      background-color: #444;
      transform-origin: 0 0;

      li {
        line-height: 35px;
        padding: 0 10px;
        color: $color-text-d;
        font-size: $font-size-medium;
      }
    }
  }

  .user-center {
    padding: 0 11px;
    .iconfont {
      color: $color-theme;
      font-size: $font-size-large-x;
    }
  }
}
</style>
