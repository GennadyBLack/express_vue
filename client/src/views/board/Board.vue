<template>
  <div v-if="board">
    <!-- /** ==================== start of draggable COLUMN */ -->
    <draggable
      class="drop-zone__wrapper"
      :list="board?.columns"
      ghost-class="ghost"
      group="collumn"
      @change="log"
      itemKey="id"
      @end="end"
      @start="start"
    >
      <template #item="{ element }">
        <div class="drop-zone">
          <div class="drop-zone__title">
            {{ element.title }} {{ element?.id }}
          </div>

          <!-- /** ========================!start of draggable TASK */ -->
          <draggable
            :list="element?.tasks"
            group="task"
            @change="log"
            itemKey="id"
            @end="end"
            @start="start"
            ghost-class="ghost"
          >
            <template #item="{ element }">
              <div class="drag-el">{{ element.title }} {{ element?.id }}</div>
            </template>
            <template #footer>
              <button class="btn-default" @click="createTask(element?.id)">
                + Add task
              </button>
            </template>
          </draggable>
        </div>
      </template>

      /**========== column footer */
    </draggable>
    <div>
      <button @click="createUserBoard">Доска</button>
      <button @click="createColunm">Колонка</button>
    </div>
    <!-- TEST -->
  </div>
  <div v-else>
    <h1>Sorry, you dont have any boards</h1>
    <div>
      <button @click="createUserBoard">Доска</button>
      <button @click="createColunm">Колонка</button>
    </div>
    <ToggleProvider>
      <template #activator="{ toggle }">
        <button @click="toggle">Add</button>
      </template>
      <template #content>
        <createtastForm />
      </template>
    </ToggleProvider>
  </div>
</template>
<script setup>
import ToggleProvider from '../../components/common/ToggleProvider.vue'
import createtastForm from '../../components/board/task/createTaskForm.vue'
import draggable from 'vuedraggable'
import useBoard from '@/composables/boardComposables/useBoardComp'
const { board, id, createUserBoard, createColunm, createTask } = useBoard()
</script>
<script>
export default {
  methods: {
    start(e) {
      e.clone.classList.add('rotated')
      console.log(e, 'START')
    },
    end(e) {
      console.log(e, 'END')
    },
    log(item) {
      console.log(item, 'args')
    },
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
.ghost {
  background: rgb(160, 116, 116);
}
.drop-zone__wrapper {
  height: 90vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.drop-zone {
  border-radius: 5px;
  margin: 0.2rem;
  min-width: 17rem;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 8px;
  padding: 5px;
}
.ghost {
  background: rgba(53, 14, 14, 0.274);
}
.rotated {
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
</style>
