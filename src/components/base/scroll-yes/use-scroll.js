import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

export default function useScroll(scrollRef, config) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(scrollRef.value, {
      observeDOM: true,
      ...config
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })

  return {
    scroll
  }
}
