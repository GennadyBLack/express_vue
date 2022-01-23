import { createRouter, createWebHistory } from 'vue-router'
import CustomersList from "../components/CustomersList.vue";
import AddCustomer from "../components/AddCustomer.vue";
import SearchCustomers from "../components/SearchCustomers.vue";
import Customer from "../components/Customer.vue";

const routes = [
  {
    path: "/",
    name: "tasks",
    alias: "/customer",
    component: CustomersList,
    meta:{layout:'DefaultLayout'},
    children: [
      {
        path: "/customer/:id",
        name: "customer-details",
        component: Customer,
        props:true,
        meta:{layout:'DefaultLayout'},
      }
    ]
  },
  {
    path: "/add",
    name: "add",
    component: AddCustomer,
    meta:{layout:'DefaultLayout'},
  },
  {
    path: "/search",
    name: "search",
    component: SearchCustomers,
    meta:{layout:'DefaultLayout'},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
