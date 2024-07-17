<template>
  <div class="boards-list">
    <div
      class="boards-list__item"
      v-for="board in current_user?.boards"
      :key="board.id"
      :style="{ background: board?.background }"
      @click.stop="$router.push({ name: 'board', params: { id: board?.id } })"
    >
      <div
        @click.stop="
          $router.push({ name: 'board_edit', params: { id: board?.id } })
        "
        class="btn edit-board__btn"
      >
        &#9998;
      </div>
      <div class="">{{ board?.title }}</div>
    </div>
    <router-link class="btn btn-board" :to="{ name: 'board_create' }"
      >Создать
    </router-link>
  </div>
</template>
<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
</script>
<style lang="scss">
.boards-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &__item {
    position: relative;
    width: 18rem;
    height: 25rem;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 1rem;
    border-radius: 3px;
    position: relative;
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.edit-board__btn {
  position: absolute;
  font-size: 30px;
  right: 10px;
  top: 10px;
  z-index: 100;
}
.btn-board {
  margin-top: 15px;
  height: 40px;
}
</style>
