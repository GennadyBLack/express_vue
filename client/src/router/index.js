import { createRouter, createWebHistory } from 'vue-router'
import CustomersList from "../components/CustomersList.vue";
import AddCustomer from "../components/AddCustomer.vue";
import SearchCustomers from "../components/SearchCustomers.vue";
import Customer from "../components/Customer.vue";

const routes = [
  {
    path: "/",
    name: "customers",
    alias: "/customer",
    component: CustomersList,
    children: [
      {
        path: "/customer/:id",
        name: "customer-details",
        component: Customer,
        props: true
      }
    ]
  },
  {
    path: "/add",
    name: "add",
    component: AddCustomer
  },
  {
    path: "/search",
    name: "search",
    component: SearchCustomers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
