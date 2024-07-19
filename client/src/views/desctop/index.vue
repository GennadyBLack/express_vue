<template>
  <div class="">
    <div class="table_list">
      <div
        v-for="table in tables?.data"
        :key="table?.id"
        class="table_list__item"
        @click="() => router.replace(`desctop/${table?.id}`)"
      >
        {{ table?.name }}
      </div>
      <div class="btn" @click="() => router.replace('desctop/add')">
        Добавить
      </div>
      <Field name="table_name" v-model="table_name" />
    </div>

    <Table
      v-if="data?.data?.data?.length"
      :data="data?.data?.data"
      :cols="[
        {
          title: `email`,
          name: `email`,
          sort: true,
        },
        {
          title: `password`,
          name: `password`,
          sort: true,
        },
      ]"
    >
      <template #actions="menuProps">
        <div>
          <ColumnMenu
            :cols="menuProps?.cols"
            @toggleColumn="menuProps.onToggleColumn"
            @reorderColumns="menuProps.onReorderColumns"
            :hiddenCols="menuProps.hiddenCols"
          />
        </div> </template
    ></Table>
    <button @click="getQuery">getQuery</button>
  </div>
</template>

<script setup>
import api from '@/api/api'
import { Table, ColumnMenu, Field } from 'rdbxxx'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const table_name = ref('')
const selectedTable = ref(1)
const router = useRouter()

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

const data = ref([])
const tables = ref([])

const getTables = async () => {
  tables.value = await api.table.getAll()
}

onMounted(async () => {
  data.value = await api.table.getRecords(selectedTable?.value)
  getTables()
})
</script>

<style lang="scss">
:root {
  --table-border-color: #6c7ae0;
  --table-th-background: #6c7ae0;
  --table-th-color: #fff;
  --table-td-odd-background: #fff;
  --table-td-even-background: #f8f6ff;
  --table-row-hoveer-background: #98a0d8;
  --table-row-hover-color: #000000;
  --table-fixed-background-odd: #fff;
  --table-fixed-background-even: #f8f6ff;
}

table {
  max-width: 100vw;
  overflow: scroll;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1.67fr);
}

thead,
tbody,
tr {
  display: contents;
}

th,
td {
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

th {
  position: sticky;
  top: 0;
  background: var(--table-th-background);
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: var(--table-th-color);
}

th:last-child {
  border: 0;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0;
  width: 3px;
  cursor: col-resize;
}

.resize-handle:hover,
.header--being-resized .resize-handle {
  opacity: 0.5;
}

th:hover .resize-handle {
  opacity: 0.3;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
  background-color: var(--table-td-odd-background);
}

tr:nth-child(even) td {
  background-color: var(--table-td-even-background);
}

.fixed-left {
  position: sticky;
  left: 0;
  z-index: 1;
  background: var(--table-fixed-background);
}

.fixed-right {
  position: sticky;
  right: 0;
  z-index: 1;
}

tr:hover > td {
  background-color: var(--table-row-hover-background);
  color: var(--table-row-hover-color);
}

.dropdown {
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
.dropdown-item {
  padding: 8px 16px;
  cursor: move;
  display: flex;
  align-items: center;
}
.dropdown-item input {
  margin-right: 10px;
}
.table_list {
  display: flex;
  gap: 10px;
}
.table_list__item {
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  background: #6c7ae0;
}
</style>
