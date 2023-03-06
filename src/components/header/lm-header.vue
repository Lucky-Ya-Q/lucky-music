<template>
  <div class="lm-header">
    <h1 class="title">Lucky Music</h1>
    <router-link class="user-center" to="/user-center">
      <i class="iconfont icon-shoucang-"></i>
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.lm-header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;

  .title {
    display: inline-block;
    font-weight: normal;
    color: $color-theme;
    font-size: $font-size-large;
  }

  .user-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 44px;

    .iconfont {
      color: $color-theme;
      font-size: $font-size-large-x;
    }
  }
}
</style>
