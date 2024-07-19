<template>
  <div class="">
    <div class="" v-if="data?.data?.length">
      <Table
        :data="data?.data"
        :cols="[{ title: 'asdasda', name: 'asdasda', sort: true }]"
      />
      <Btn class="base-btn" @click="createModal.open()">Добавить</Btn>
    </div>
    <div class="" v-else>
      <h3>
        В таблице нет записей
        <Btn class="base-btn" @click="createModal.open()">Добавить</Btn>
      </h3>
    </div>
    <Modal name="newData">
      <template #content>
        <Form v-slot="{ handleSubmit }" class="form-wrapper">
          <div v-for="item in tableData?.data?.tableColumns" :key="item.id">
            <Field
              :name="`field-${item?.id ?? item?.name}`"
              :label="item?.name"
              v-model="form[item?.id]"
            />
          </div>
          <Btn @click="handleSubmit(createData)" class="base-btn"
            >Сохранить</Btn
          >
        </Form>
      </template>
    </Modal>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue'
import api from '@/api/api'
import { Table, Btn, Modal, useModal, Form, Field } from 'rdbxxx'
import { useRoute } from 'vue-router'
const createModal = useModal({ name: 'newData' })
const route = useRoute()
const cols = computed(() =>
  tableData.value?.data?.tableColumns?.map((item) => {
    return { title: `${item?.name}`, name: `${item?.name}`, sort: true }
  })
)

const form = ref({})
const data = ref([])
const tableData = ref(null)
const getTable = async () => {
  form.value = {}
  tableData.value = await api.table.get(route.params.id)
  tableData.value.data.tableColumns.forEach((element) => {
    form.value[element.id] = ''
  })
  data.value = (await api.table.getRecords(route.params.id)).data
}
const createData = async () => {
  try {
    api.table
      .createData(route.params.id, { fields: form.value })
      .then((res) => {
        if (res?.data) {
          console.error(res)
          getTable()
          createModal.close()
        }
      })
    console.error(form.value)
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getTable()
})
</script>
