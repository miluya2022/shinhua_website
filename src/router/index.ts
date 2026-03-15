import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/story/:id?',
      name: 'story',
      component: () => import('../views/StoryView.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: () => import('../views/NutritionView.vue')
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: () => import('../views/CouponsView.vue')
    }
  ]
})

export default router
