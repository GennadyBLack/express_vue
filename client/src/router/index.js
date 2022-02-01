import { createRouter, createWebHistory } from 'vue-router'
import CustomersList from '../components/CustomersList.vue'
import AddCustomer from '../components/AddCustomer.vue'
import Customer from '../components/Customer.vue'
import Login from '../views/auth/LoginForm'
import Register from '../views/auth/RegisterForm'
import Board from '../views/board/Board'

const routes = [
  {
    path: '/',
    name: 'tasks',
    alias: '/customer',
    component: CustomersList,
    meta: { layout: 'DefaultLayout' },
    children: [
      {
        path: '/customer/:id',
        name: 'customer-details',
        component: Customer,
        props: true,
        meta: { layout: 'DefaultLayout' },
      },
    ],
  },
  {
    path: '/add',
    name: 'add',
    component: AddCustomer,
    meta: { layout: 'DefaultLayout' },
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: { layout: 'DefaultLayout' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
