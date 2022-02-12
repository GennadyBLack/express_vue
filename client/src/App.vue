<template>
  <div class="app_container">
    <component :is="layout" />
    <Errors />
  </div>
</template>
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
