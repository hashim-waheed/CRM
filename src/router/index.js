import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/auth/RegisterView.vue'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import AdminComponent from '@/components/admin/AdminComponent.vue'
import CompanyView from '@/views/company/CompanyView.vue'
import Department from '@/components/department/DepartmentComponent.vue'
import Employee from '@/components/employee/EmployeeController.vue'
import FreelancerComponent from '@/components/freelancer/FreelancerComponent.vue'
import Company from '@/components/company/Company.vue'


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
      path:'/admin-dashboard',
      name:'AdminDashboard',
      component:AdminComponent,
      children:[
        {
          path:'',
          name:'Company',
          component:Company
        },
        {
          path:'freelancer',
          component:FreelancerComponent
        },
        {
          path:'company',
          component:Company
        }
      ]

    },
    {
      path: '/company-dashboard',
      name: 'Company Dashboard',
      component: CompanyView,
      children: [
        {
          path: '', // Empty path for default child route
          name:'Department',
          component: Department
        },
        {
          path: 'company-departments',
          component: Department
        },
        {
          path: 'employees',
          component: Employee
        },
        // Add more child routes as needed
      ]
    }
  ]
})

export default router
