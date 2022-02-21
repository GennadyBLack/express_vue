import { ref } from 'vue'

export function MainMenuComposable(props) {
  const availableRoutes = ref(null)

  const allRoutes = [
    { name: 'login', title: 'Login', auth: true },
    { name: 'register', title: 'register', auth: true },
    { name: 'board', title: 'board', auth: false },
  ]
  availableRoutes.value = allRoutes.filter((item) => {
    if (props !== null && !item.auth) {
      console.log('1', props !== null && !item.auth)
      return item
    }
    if (props == null && item.auth) {
      console.log('2', props !== null && !item.auth)
      return item
    }
  })

  return { availableRoutes }
}
