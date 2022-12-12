import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SnRegister from '@/views/SnRegister';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: SnRegister,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
