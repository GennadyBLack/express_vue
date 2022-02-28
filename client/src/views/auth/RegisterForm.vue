<template>
  <div class="form">
    <input type="text" v-model="register_form.email" class="form-field test" />
    <input type="text" v-model="register_form.password" class="form-field" />
    <input type="text" v-model="register_form.username" class="form-field" />
    <button @click="register" class="form-field">login</button>
    <button @click="setDataForm" class="form-field">test</button>
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
