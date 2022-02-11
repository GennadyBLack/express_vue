<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Customers List</h4>
      <ul>
        <li v-for="(customer, index) in customers" :key="index">
          <router-link
            :to="{
              name: 'customer-details',
              params: { customer: JSON.stringify(customer), id: customer.id },
            }"
          >
            {{ customer.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <router-view @refreshdata="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import { getAllTasks } from '../api/task'
import { getAllUsers } from '../api/user'
export default {
  name: 'customers-list',
  data() {
    return {
      customers: [],
    }
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCustomers() {
      const user = getAllUsers().then((response) => {
        // JSON are parsed automatically.

        console.log(response.data)
        return response.data
      })
      console.log(user, 'users')
      getAllTasks()
        .then((response) => {
          this.customers = response.data // JSON are parsed automatically.
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    refreshList() {
      this.retrieveCustomers()
    },
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveCustomers()
  },
}
</script>

<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
