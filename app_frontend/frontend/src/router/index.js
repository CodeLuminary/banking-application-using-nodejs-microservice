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
      path: '/dashboard/:id',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '', name: 'main_dashboard',
          component: ()=> import('../components/UserDashboard.vue')
        },
        {
          path: '/dashboard', name: 'main_dashboard1',
          component: ()=> import('../components/UserDashboard.vue')
        },
        {
          path: '/account', name: 'account',
          component: ()=> import('../components/Account.vue')
        }
      ]
    },
    {  
      path: '/dashboard', name: 'dashboard2',
      component: ()=> import('../views/Dashboard.vue') 
    }
  ]
})

export default router
