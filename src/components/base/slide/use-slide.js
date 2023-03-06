import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide)

export default function useSlide(slideRef) {
  const slide = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    slide.value = new BScroll(slideRef.value, {
      scrollX: true,
      scrollY: false,
      slide: true,
      momentum: false,
      bounce: false,
      probeType: 3
    })

    slide.value.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slide.value.destroy()
  })

  return {
    slide,
    currentPageIndex
  }
}
