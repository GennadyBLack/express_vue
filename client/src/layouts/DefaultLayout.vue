<template>
  <div class="default-layout">
    <main-menu />
    <div class="default-container container-fluid">
      <div class="main-content"><router-view /></div>
    </div>
  </div>
</template>
<script setup>
import MainMenu from '../components/transitions/MainMenu.vue'
</script>
<style>
.default-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.main-content {
  width: 100%;
  min-height: 100vh;
}
.left-menu {
  background: rgb(219, 205, 205);
  font-size: 10px;
  min-width: 40px;
  display: flex;
  flex-direction: column;
}
</style>
