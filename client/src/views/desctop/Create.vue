<template>
  <div class="d-flex p-3 mt-4">
    <Form v-slot="{ handleSubmit }" class="form-wrapper">
      <h3>Создание таблицы</h3>
      <Field
        :placeholder="'Название таблицы'"
        v-model="table_name"
        :rules="{ required: true }"
        name="table_name"
      />
      <Field
        v-model="description"
        name="description"
        :placeholder="'Описание'"
      />
      <Btn @click="handleSubmit(createTable)" class="base-btn"
        >Создать таблицу</Btn
      >
    </Form>
  </div>
</template>

<script setup>
import api from '@/api/api'
import { Field, Form, Btn } from 'rdbxxx'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const description = ref('')
const table_name = ref('')

const createTable = async () => {
  try {
    await api.table
      .create({
        name: table_name.value,
        userId: 1,
      })
      .then((res) => {
        if (res?.data?.data?.id) {
          useRouter().push({
            name: 'desctop-details',
            params: { id: res?.data?.id },
          })
        }
      })
  } catch (error) {
    console.error(error)
  }
}
</script>
