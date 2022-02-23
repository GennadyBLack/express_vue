import { ref, watch, onMounted, computed, onUpdated, watchEffect } from 'vue'

export function MainMenuComposable(props) {
  const availableRoutes = ref(null)

  const allRoutes = [
    { name: 'login', title: 'Login', auth: true },
    { name: 'register', title: 'register', auth: true },
    { name: 'board', title: 'board', auth: false },
  ]

  const filterRoutes = () => {
    const id = props.value ? props.value.id : false
    console.log(id, ';;;d;;sdsd', props)
    availableRoutes.value = allRoutes.filter((item) => {
      if (item.auth && !id) {
        return item
      } else if (!item.auth && id) {
        return item
      }
    })
  }
  watchEffect(filterRoutes)

  return { routes: computed(() => availableRoutes.value) }
}
