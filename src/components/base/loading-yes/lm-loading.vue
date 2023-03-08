<template>
  <div class="lm-loading">
    <img class="img" src="./loading.gif" alt="" />
    <p class="text">努力加载中</p>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.lm-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .img {
    width: 24px;
    height: 24px;
    margin: auto;
  }

  .text {
    color: $color-text-l;
    font-size: $font-size-small;
    line-height: 20px;
    white-space: nowrap;
  }
}
</style>
