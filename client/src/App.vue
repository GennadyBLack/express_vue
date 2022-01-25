<template>
  <div class="app_container">
    {{ current_user }}-l
    <component :is="layout" />
    <Errors />
  </div>
</template>
<script setup>
import { current_user } from './composables/CurrentUserComposable/index'
</script>
<script>
import { setCurrentUser } from './composables/CurrentUserComposable/index'
import { me } from './api/auth'
import Errors from './components/transitions/Errors'
import DefaultLayout from './layouts/DefaultLayout.vue'
export default {
  name: 'app',
  components: {
    // MainMenu,
    // SidebarMenu,
    DefaultLayout,
    // CreateLayout,
    // ModalCreateLayout,
    // AuthLayout,
    Errors,
  },
  mounted() {
    // this.$router.push("/profile");
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
  mounted() {
    me().then((res) => setCurrentUser(res.data.user))
  },
}
</script>
