<template>
  <button @click="createUserBoard">creqte</button>
  <button @click="createColunm">column</button>

  <div class="drop-zone__wrapper" v-if="board">
    <!-- start -->
    <div
      v-for="column in board?.columns"
      :key="column?.id"
      class="drop-zone"
      @drop="onDrop($event, column?.id)"
      @dragover.prevent="onDragOver($event)"
      @dragenter.prevent="onDragEnter($event)"
    >
      {{ column?.title }}{{ column?.id }}
      <div
        v-for="item in column?.tasks"
        :key="item?.title"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>

      <button @click="createTask(column?.id)">+</button>
    </div>
    <!-- end -->
  </div>
</template>
<script setup>
import useBoard from '@/composables/boardComposables/currentBoardComp'
const { board, id, createUserBoard, createColunm, createTask } = useBoard()
</script>
<script>
export default {
  methods: {
    startDrag(evt, item) {
      console.log(evt, item)
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
    onDragOver(evt) {
      console.log(evt, 'DRAG OVER')
    },
    onDragEnter(evt) {
      console.log(evt, 'DRAG ENTER')
    },
  },
}
</script>
<style scoped>
.drop-zone__wrapper {
  height: 90vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.drop-zone {
  margin: 0.2rem;
  min-width: 300px;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
