<template>
  <div class="login-form">
    <Form v-slot="{ handleSubmit }" class="form-wrapper">
      <div class="row">
        <Field
          v-model="register_form.email"
          :rules="{ required: true }"
          :placeholder="'Логин'"
          name="mail"
          :class="'col-12 form-field'"
          label="Логин: "
        />
      </div>
      <div class="row">
        <Field
          v-model="register_form.password"
          :rules="{ required: true }"
          :placeholder="'Пароль'"
          name="password"
          :class="'col-12 form-field'"
          label="Пароль: "
        />
      </div>

      <div class="row">
        <Field
          v-model="register_form.username"
          :rules="{ required: true }"
          :placeholder="'Имя'"
          name="password"
          :class="'col-12 form-field'"
          label="Имя: "
        />
      </div>

      <div class="form-btns">
        <Btn @click="setDataForm" class="base-btn">test</Btn>
        <Btn @click="handleSubmit(register)" class="base-btn"> Register </Btn>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, Btn } from 'rdbxxx'
import useRegister from '../../composables/authComposables/register'
const { register, register_form, editField } = useRegister()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
  editField('username', 'adminus')
}
</script>
//register_form
