<template>
  <div>
    <spiner />
    <input type="text" v-model="login_form.email" />
    <input type="text" v-model="login_form.password" />

    <button @click="login">login</button>
    <button @click="setDataForm">test</button>
  </div>
</template>
<script setup>
import useLogin from '../../composables/authComposables/login'
const { login, login_form, editField } = useLogin()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
}
</script>
