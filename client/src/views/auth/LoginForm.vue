<template>
  <div>
    <spiner />
    <v-form v-slot="{ handleSubmit }">
      <div class="login-form">
        <v-input-field
          v-model="login_form.email"
          :rules="{ required: true }"
          :placeholder="'Логин'"
          name="mail"
          :class="'mt-3'"
        />
        <v-input-field
          v-model="login_form.password"
          :rules="{ required: true }"
          :placeholder="'Пароль'"
          name="password"
          :class="'mt-3'"
        />
        <button @click="setDataForm">test</button>
        <button @click="handleSubmit(login)">Login</button>
      </div>
    </v-form>
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
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
