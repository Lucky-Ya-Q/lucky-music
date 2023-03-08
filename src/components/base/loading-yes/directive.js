import { createApp } from 'vue'
import LmLoading from '@/components/base/loading-yes/lm-loading.vue'

const loadingDirective = {
  mounted(el, binding) {
    el.loading = createApp(LmLoading).mount(document.createElement('div'))

    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    binding.value ? append(el) : remove(el)
  }
}

function append(el) {
  const style = getComputedStyle(el)
  if (style.position === 'static') {
    el.position = el.style.position = 'relative'
  }
  el.appendChild(el.loading.$el)
}

function remove(el) {
  if (el.position) {
    el.style.position = el.position
  }
  el.removeChild(el.loading.$el)
}

export default loadingDirective
