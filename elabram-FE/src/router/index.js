// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Register',
    component:  () => import('@/views/Auth/RegisterPage.vue')
  },
  {
    path: '/confirm-register',
    name: 'Confirm Register',
    component:  () => import('@/views/Auth/ConfirmRegisterPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:  () => import('@/views/Auth/LoginPage.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
})

export default router
