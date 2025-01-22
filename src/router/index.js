import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/logup',
      component: () => import('../views/LogupView.vue'),
    },
    {
      path: '/profile',
      component: () => import('../views/ProfileView.vue'),
    },

  ],
})

export default router
