<template>
  <div class="">
    <h1>{{ data }}</h1>
    <Card padding="30" margin="100">
      <h4>
        {{ data?.name }}
      </h4>
      <div class="">
        <div class="" v-for="column in data?.tableColumns" :key="column?.id">
          <Field
            :name="`column-${column?.id}`"
            field="checkbox"
            :label="column?.name"
          >
          </Field>
        </div>
      </div>
      <Btn @click="() => modal.open()" class="base-btn">Добавить колонку</Btn>
    </Card>
  </div>

  <Modal name="newColumn">
    <template #content>
      <Form v-slot="{ handleSubmit }" class="form-wrapper">
        <Field
          name="field"
          v-model="field"
          placeholder="Название"
          :rules="{ required: true }"
        />

        <Field
          name="type"
          v-model="type"
          :options="['STRING', 'NUMBER', 'DATE', 'BOOLEAN']"
          field="multiselect"
          placeholder="Тип поля"
          :rules="{ required: true }"
        />

        <Btn @click="handleSubmit(addColumn)" class="base-btn"
          >Добавить</Btn
        ></Form
      >
    </template>
  </Modal>
</template>
<script setup>
import api from '@/api/api'
import { Field, Form, Btn, Card, Modal, useModal } from 'rdbxxx'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const data = ref({})
const modal = useModal({ name: 'newColumn' })
const field = ref('')
const type = ref('')

const addColumn = async () => {
  try {
    await api.table_columns
      .create({
        tableId: route.params.id,
        name: field?.value,
        type: type?.value,
        options: {},
      })
      .then((res) => {
        if (res?.data) {
          getTable()
          modal.close()
          field.value = ''
          type.value = ''
        }
      })
  } catch (error) {}
}

const getTable = async () => {
  try {
    const response = await api.table.get(route.params.id)
    data.value = response.data
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getTable()
})
</script>
<style>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  .row {
    gap: 20px;
  }
}
</style>
