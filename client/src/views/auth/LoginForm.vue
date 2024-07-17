<template>
  <div class="login-form">
    <Form v-slot="{ handleSubmit }" class="form-wrapper">
      <Field
        v-model="login_form.email"
        :rules="{ required: true }"
        :placeholder="'Логин'"
        name="mail"
        :class="' form-field'"
        label="Логин "
      />
      <Field
        v-model="login_form.password"
        :rules="{ required: true }"
        :placeholder="'Пароль'"
        name="password"
        :class="' form-field'"
        label="Пароль"
      />
      <div class="form-btns">
        <Btn @click="setDataForm" class="base-btn">test</Btn>
        <Btn @click="handleSubmit(login)" class="base-btn"> Login </Btn>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, Btn } from 'rdbxxx'
import useLogin from '../../composables/authComposables/login'
const { login, login_form, editField } = useLogin()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
}
</script>
