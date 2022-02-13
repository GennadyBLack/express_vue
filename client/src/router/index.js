import { createRouter, createWebHistory } from 'vue-router'
import { current_user } from '../composables/CurrentUserComposable/index'
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
    meta: { layout: 'DefaultLayout', requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'DefaultLayout', requiresAuth: false },
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
    console.log(typeof to.meta.requiresAuth, current_user.value)
    next()
  } else if (to.meta.requiresAuth && !current_user.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
