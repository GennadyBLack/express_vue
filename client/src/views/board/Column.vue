<template>
  <div ref="columnRef" class="column">
    <div class="tasks">
      <Task
        v-for="(task, index) in sortedTasks"
        :key="task.id"
        :task="task"
        :index="index"
        :columnIndex="columnIndex"
        :updateBoard="props?.updateBoard"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Task from './Task.vue'
import Sortable from 'sortablejs'
const props = defineProps({
  column: Object,
  columnIndex: Number,
  updateBoard: Function,
})

const emits = defineEmits(['updateBoard'])
const columnRef = ref(null)

const sortedTasks = computed(() => {
  return [...props.column.tasks].sort((a, b) => a.sort - b.sort)
})

onMounted(() => {
  if (columnRef.value) {
    new Sortable(columnRef.value.querySelector('.tasks'), {
      group: 'tasks',
      animation: 150,
      touchStartThreshold: 0, // количество пикселей для начала перетаскивания
      chosenClass: 'sortable-chosen', // Класс для выбранного элемента
      dragClass: 'sortable-drag',
      onEnd: (evt) => {
        if (evt.from === evt.to && evt.oldIndex !== evt.newIndex) {
          const movedTask = props.column.tasks.splice(evt.oldIndex, 1)[0]
          props.column.tasks.splice(evt.newIndex, 0, movedTask)

          // Пересчитываем поле sort для задач после перемещения
          props.column.tasks.forEach((task, index) => {
            task.sort = index + 1
          })

          // Здесь можно вызвать метод для сохранения изменений на сервере
          // saveTasksToServer(props.column.tasks);
        } else if (evt.from !== evt.to) {
          const fromColumnIndex =
            evt.from.parentElement.__vueParentComponent.props.columnIndex
          const toColumnIndex =
            evt.to.parentElement.__vueParentComponent.props.columnIndex
          const movedTask = props.column.tasks[evt.oldIndex]

          emits(
            'moveTask',
            fromColumnIndex,
            toColumnIndex,
            evt.oldIndex,
            evt.newIndex,
            movedTask
          )
        }
      },
    })
  }
})
</script>

<style>
.tasks {
  padding: 10px;
}
</style>
