<template>
  <main-menu />
  <div class="default-container container-fluid">
    <div class="left-menu">
      <router-link
        v-for="board in current_user?.boards"
        :key="board.id"
        :to="{ name: 'board', params: { id: board?.id } }"
      >
        {{ board?.title }}
      </router-link>
    </div>
    <div class="main-content"><router-view /></div>
  </div>
</template>
<script setup>
import { current_user } from '@/composables/CurrentUserComposable/index'
import MainMenu from '../components/transitions/MainMenu.vue'
</script>
<style scoped>
.default-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.main-content {
  width: 100%;
}
.left-menu {
  background: rgb(219, 205, 205);
  font-size: 10px;
  min-width: 40px;
  display: flex;
  flex-direction: column;
}
</style>
