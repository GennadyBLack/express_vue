<template>
  <div class="main-menu">
    <div class="main-menu-container">
      <div class="router-list">
        <div class="router-list__left">
          <div class="router-list--item" v-for="route in routes" :key="route">
            <router-link :to="{ name: route.name }">{{
              route.title
            }}</router-link>
          </div>
        </div>
        <div class="router-list__right">
          <button
            v-if="current_user?.id ? current_user?.id : null"
            @click="logout"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { current_user } from '../../composables/CurrentUserComposable/index'
import useLogout from '../../composables/authComposables/logout'
import { MainMenuComposable } from '../../composables/navigationComposable/index'
export default {
  setup() {
    const { logout } = useLogout()
    const { routes } = MainMenuComposable(current_user)
    return { routes, logout, current_user }
  },
}
</script>
<style scoped>
.menu-logout {
  height: 30px;
  background: #eee;
}
</style>
