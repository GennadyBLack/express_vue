import { ref, watch, onMounted, computed } from 'vue'

export function MainMenuComposable(props) {
  const availableRoutes = ref(null)

  const allRoutes = [
    { name: 'login', title: 'Login', auth: true },
    { name: 'register', title: 'register', auth: true },
    { name: 'board', title: 'board', auth: false },
  ]

  const filterRoutes = () => {
    console.log(props)
    availableRoutes.value = allRoutes.filter((item) => {
      if (!!(props.value.id ? props.value.id : null) && !item.auth) {
        console.log('1', props.value.id, !item.auth)
        return item
      }
      if (!!(!props.value.id ? null : props.value.id) && item.auth) {
        console.log('2', props !== null && !item.auth)
        return item
      }
    })
  }

  // onMounted(filterRoutes)

  watch(
    [props],
    (value) => {
      filterRoutes()
    },
    { deep: true }
  )

  return { routes: computed(() => availableRoutes.value) }
}
