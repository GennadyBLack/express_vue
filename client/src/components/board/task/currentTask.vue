<template>
  <div id="modal-background">
    <div class="modal">
      <button @click.stop.prevent="toggle" class="modal-delete__btn">#</button>
      <div @click.prevent>{{ editTaskForm }}</div>
    </div>
  </div>
</template>
<script setup>
import editTask from '@/composables/TasksComposable/editTaskComp'
const props = defineProps({ id: Number, toggle: Function })
const { editTaskForm } = editTask(props.id)
</script>
<style lang="scss">
.modal {
  display: block;
  position: absolute;
  background: #b2adad;
  top: 12%;
  height: 38rem;
  width: 30rem;
  left: 40%;
  z-index: 10;
  &-delete__btn {
    background: red;
  }
}
</style>
