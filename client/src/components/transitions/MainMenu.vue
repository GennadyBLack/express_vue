<template>
  <div class="main-menu">
    {{ availableRoutes }}
    <div class="main-menu-container">
      <div class="router-list">
        <div
          class="router-list--item"
          v-for="route in availableRoutes"
          :key="route"
        >
          <router-link :to="{ name: route.name }">{{
            route.title
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { user } from '../../composables/CurrentUserComposable/index'
import { MainMenuComposable } from '../../composables/navigationComposable/index'
export default {
  setup() {
    const { availableRoutes } = MainMenuComposable(user.value)
    return { availableRoutes }
  },
}
</script>
