import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/auth/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin-dashboard',
      name: 'Admin Dashboard',
      component: AdminDashboard
    }
  ]
})

export default router
