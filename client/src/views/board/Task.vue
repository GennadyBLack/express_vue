<template>
  <div class="task" draggable="true" :title="task?.title">
    {{ task?.title }}
    <div class="task__icon" @click="modal.open">
      &#x2710;
      <Modal :name="`taskCart_${task?.id}`">
        <template #content>
          <div class="task__modal">
            <TaskForm
              :task="task"
              @updateBoard="props?.updateBoard"
              :close="modal.close"
            />
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import TaskForm from '@/components/board/task/TaskForm.vue'
const props = defineProps({
  task: Object,
  index: Number,
  columnIndex: Number,
  updateBoard: Function,
})

import { Modal, useModal } from 'rdbxxx'
const modal = useModal({ name: `taskCart_${props?.task?.id}` })
</script>
