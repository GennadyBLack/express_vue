<template>
  <div class="searchform">
    <h4>Find by Age</h4>
    <div class="form-group">
      <input type="number" class="form-control" id="active" required="" v-model="active" name="age">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchCustomers" class="btn btn-success">Search</button>
    </div>

    <ul class="search-result">
      <li v-for="(customer, index) in customers" :key="index">
        <h6>{{customer.title}} ({{customer.active}})</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "search-customer",
  data() {
    return {
      active: true,
      customers: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchCustomers() {
      http
        .get("/customers/active/" + this.active)
        .then(response => {
          this.customers = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>