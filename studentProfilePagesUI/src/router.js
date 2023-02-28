import { createRouter, createWebHistory } from 'vue-router'
import List from '@/pages/List.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: List,
    },
    {
      path: '/edit',
      component: () => import('@/pages/Edit.vue'),
    },
    
  ],
})