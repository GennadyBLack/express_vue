<template>
  <input type="text" v-model="task" />
</template>
<script setup>
import useTask from '../../../composables/TasksComposable/index'
const { task, setTask, createTask } = useTask()
</script>
