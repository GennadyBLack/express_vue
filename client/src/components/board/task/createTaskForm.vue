<template>
  <div>
    <input type="text" v-model="task" @blur="blur" class="create-task-input" />
  </div>
</template>
<script setup>
import useTask from '../../../composables/TasksComposable/index'
const { task, createTask } = useTask()
const props = defineProps({ id: Number })
const emit = defineEmits(['blur'])

const blur = () => {
  emit('blur')
  createTask(props?.id)
}
</script>
