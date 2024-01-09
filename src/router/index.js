import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/auth/RegisterView.vue';
import HomeView from '../views/home/HomeView.vue';
import LoginView from '../views/auth/LoginView.vue';
import AdminComponent from '@/components/admin/AdminComponent.vue';
import CompanyView from '@/views/company/CompanyView.vue';
import Department from '@/components/department/DepartmentComponent.vue';
import Employee from '@/components/employee/EmployeeController.vue';
import FreelancerComponent from '@/components/freelancer/FreelancerComponent.vue';
import Company from '@/components/company/Company.vue';

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
      component: AdminComponent,
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: Company
        },
        {
          path: 'freelancer',
          name: 'freelancer-dashboard',
          component: FreelancerComponent
        },
        {
          path: 'company',
          name: 'company-dashboard',
          component: Company
        }
      ]
    },
    {
      path: '/company-dashboard',
      component: CompanyView,
      children: [
        {
          path: '',
          name: 'company-dashboard-default',
          component: Department
        },
        {
          path: 'company-departments',
          name: 'company-departments',
          component: Department
        },
        {
          path: 'employees',
          name: 'employees',
          component: Employee
        }
      ]
    }
  ]
});

export default router;
