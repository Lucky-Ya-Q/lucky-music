import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin, {
  loading: 'https://s4.music.126.net/style/web2/img/default/default_album.jpg'
})

app.mount('#app')
