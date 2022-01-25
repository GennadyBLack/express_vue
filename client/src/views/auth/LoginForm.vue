<template>
  <div>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />
    <button @click="login">login</button>
    <button @click="me">me</button>
  </div>
</template>
<script>
import Axios from 'axios'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { login, me } from '../../api/auth'
export default {
  name: 'Login',
  data() {
    return {
      email: 'adminus@mail.ru',
      password: 'adminus',
    }
  },
  methods: {
    login() {
      login({ user: { email: this.email, password: this.password } }).then(
        (res) => {
          saveToken(res.data.token),
            (Axios.defaults.headers[
              'Authorization'
            ] = `token ${res.data.token}`)
        }
      )
    },
    me() {
      me().then((res) => concole.log(res, 'ME'))
    },
  },
}
</script>
