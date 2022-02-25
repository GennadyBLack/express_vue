<template>
  <div class="main">
    <main-menu />
    <div class="auth-form">
      <div class="main-content"><router-view /></div>
    </div>
  </div>
</template>
<script setup>
import MainMenu from '../components/transitions/MainMenu.vue'
</script>
<style>
.main {
  background: rgb(214, 211, 211);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
