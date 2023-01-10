import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SnRegister from '@/views/SnRegister';
import SnLogin from '@/views/SnLogin';

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
  },
  {
    path: '/login',
    name: 'login',
    component: SnLogin,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
