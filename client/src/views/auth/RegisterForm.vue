<template>
  <v-form v-slot="{ handleSubmit }">
    <div class="form">
      <v-input-field
        v-model="register_form.email"
        :rules="{ required: true }"
        :placeholder="'Логин'"
        name="mail"
        :class="' form-field'"
        label="Логин: "
      />
      <v-input-field
        v-model="register_form.password"
        :rules="{ required: true }"
        :placeholder="'Пароль'"
        name="password"
        :class="' form-field'"
        label="Пароль: "
      />
      <v-input-field
        v-model="register_form.username"
        :rules="{ required: true }"
        :placeholder="'Имя'"
        name="password"
        :class="' form-field'"
        label="Имя: "
      />
      <div class="form-btns">
        <button @click="setDataForm" class="btn form-field">test</button>
        <button @click="handleSubmit(register)" class="btn form-field">
          Register
        </button>
      </div>
    </div>
  </v-form>
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
//register_form
