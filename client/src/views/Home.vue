<template>
  <div class="">
    {{ data }}
    <button @click="getQuery">getQuery</button>
  </div>
</template>

<script setup>
import api from '@/api/api'
import { onMounted, ref } from 'vue'

const getQuery = async () => {
  try {
    const response = await api.field_values.create({
      recordId: 2,
      fieldId: 3,
      value: 'ddddaa',
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

const data = ref(null)
onMounted(() => {
  api.table.getRecords(1)
})
</script>
