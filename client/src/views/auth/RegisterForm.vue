<template>
  <div>
    <input type="text" v-model="register_form.email" />
    <input type="text" v-model="register_form.password" />
    <input type="text" v-model="register_form.username" />
    <button @click="register">login</button>
    <button @click="setDataForm">test</button>
  </div>
</template>
<script setup>
import useRegister from '../../composables/authComposables/register'
const { register, register_form, editField } = useRegister()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
  editField('username', 'adminus')
}
</script>
