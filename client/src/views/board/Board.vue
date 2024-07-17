<template>
  <div ref="board" class="board">
    <div
      v-for="(column, index) in sortedColumns"
      :key="column.id"
      class="column-container"
    >
      <div
        class="column-header"
        @mousedown="onColumnMouseDown($event, index)"
        @touchstart="onColumnMouseDown($event, index)"
      >
        {{ column.title }}
        <div>
          <Dropdown>
            <template #default> &#x2630; </template>
            <template #content>
              <div class="column-settings">
                <ul>
                  <li @click="() => deleteColumn(column?.id)">Удалить</li>
                </ul>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
      <Column
        :column="column"
        :columnIndex="index"
        @moveTask="moveTask"
        :updateBoard="fetchBoard"
      />
      <div class="column-footer" @click="() => createTask(column?.id)">
        + добавить задачу
      </div>
    </div>
    <Btn
      title="Добавить колонку"
      class="btn"
      style="
        height: 50px;
        min-width: 16rem;
        margin-top: 4px;
        margin-right: 20px;
      "
      @click="createColunm"
    />
  </div>
</template>

<script setup>
import { deleteColumnById } from '../../api/column'
import { ref, computed, onMounted } from 'vue'
import Column from './Column.vue'
import Sortable from 'sortablejs'
import { Btn, Dropdown } from 'rdbxxx'
import useBoard from '@/composables/boardComposables/useBoardComp'

const { columns, createColunm, fetchBoard, createTask } = useBoard()
const deleteColumn = (id) => {
  try {
    deleteColumnById(id).then(() => {
      fetchBoard()
    })
  } catch (error) {
    console.error(error)
  }
}
const board = ref(null)
const draggedColumnIndex = ref(null)
const sortedColumns = computed(() => {
  return [...columns?.value].sort((a, b) => a.sort - b.sort)
})

onMounted(() => {
  new Sortable(board.value, {
    group: 'columns',
    handle: '.column-header',
    animation: 150,
    touchStartThreshold: 0, // количество пикселей для начала перетаскивания
    chosenClass: 'sortable-chosen', // Класс для выбранного элемента
    dragClass: 'sortable-drag', // Класс для перетаскиваемого элемента
    onEnd: (evt) => {
      const movedColumn = columns.value.splice(evt.oldIndex, 1)[0]
      columns.value.splice(evt.newIndex, 0, movedColumn)

      // Пересчитываем поле sort для колонок после перемещения
      columns.value.forEach((column, index) => {
        column.sort = index + 1
      })
    },
  })
})

const onColumnMouseDown = (event, index) => {
  draggedColumnIndex.value = index
}

const moveTask = (fromColumn, toColumn, fromIndex, toIndex, task) => {
  if (fromColumn !== toColumn || fromIndex !== toIndex) {
    // Перемещение задачи между колонками
    columns.value[fromColumn].tasks.splice(fromIndex, 1) // Удаляем задачу из текущей колонки
    columns.value[toColumn].tasks.splice(toIndex, 0, task) // Вставляем задачу в новую колонку

    // Пересчитываем поле sort для задач в обеих колонках
    columns.value[fromColumn].tasks.forEach((task, index) => {
      task.sort = index + 1
    })
    columns.value[toColumn].tasks.forEach((task, index) => {
      task.sort = index + 1
    })

    // Здесь можно вызвать метод для сохранения изменений на сервере
    // saveTasksToServer(columns.value);
  }
}
</script>
