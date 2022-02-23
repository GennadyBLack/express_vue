import { createRouter, createWebHistory } from 'vue-router'
import { current_user } from '../composables/CurrentUserComposable/index'
import CustomersList from '../components/CustomersList.vue'
import AddCustomer from '../components/AddCustomer.vue'
import Customer from '../components/Customer.vue'
import Login from '../views/auth/LoginForm'
import Register from '../views/auth/RegisterForm'
import Board from '../views/board/Board'
const test = (props) => {
  console.log(props, 'TSETSS')
}
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
        meta: { layout: 'DefaultLayout', requiresAuth: true },
      },
    ],
  },
  {
    path: '/add',
    name: 'add',
    component: AddCustomer,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: 'AuthLayout', requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'AuthLayout', requiresAuth: false },
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../components/transitions/404'),
    meta: { layout: 'DefaultLayout' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && current_user.value) {
    console.log(current_user.value.id, 'router 1')
    next()
  } else if (to.meta.requiresAuth && !current_user.value) {
    console.log(current_user.value, 'router')
    next({ name: 'login' })
  } else {
    test(current_user)
    next()
  }
})

export default router
