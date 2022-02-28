<template>
  <div class="left-menu">
    <router-link
      v-for="board in current_user?.boards"
      :key="board.id"
      :to="{ name: 'board', params: { id: board?.id } }"
    >
      {{ board?.title }}
    </router-link>
  </div>
</template>
<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
</script>
