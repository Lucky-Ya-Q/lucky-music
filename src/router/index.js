import { createRouter, createWebHashHistory } from 'vue-router'
import LmRecommend from '@/views/lm-recommend.vue'
import LmSinger from '@/views/lm-singer.vue'
import LmTopList from '@/views/lm-top-list.vue'
import LmSearch from '@/views/lm-search.vue'
import LmUserCenter from '@/views/lm-user-center.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: LmRecommend
  },
  {
    path: '/singer',
    component: LmSinger
  },
  {
    path: '/top-list',
    component: LmTopList
  },
  {
    path: '/search',
    component: LmSearch
  },
  {
    path: '/user-center',
    component: LmUserCenter
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
