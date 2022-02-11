<template>
  <div class="app_container">
    {{ current_user }}
    <component :is="layout" />
    <Errors />
  </div>
</template>
<script setup>
import { current_user } from './composables/CurrentUserComposable/index'
</script>
<script>
import { fetchCurrentUser } from './composables/CurrentUserComposable/index'
import Errors from './components/transitions/Errors'
import DefaultLayout from './layouts/DefaultLayout.vue'
export default {
  name: 'app',
  components: {
    DefaultLayout,
    Errors,
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
  mounted() {
    fetchCurrentUser()
  },
}
</script>
