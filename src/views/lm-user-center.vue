<template>
  <div class="lm-user-center" style="width: 150px; height: 200px">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">123</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(function () {
  loading.value = false
  setTimeout(function () {
    loading.value = false
  }, 3000)
}, 3000)
</script>

<style scoped lang="scss">
.lm-user-center {
  height: calc(100vh - 88px);
  overflow: hidden;
}
</style>
