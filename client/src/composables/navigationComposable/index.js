import { ref } from 'vue'

export function MainMenuComposable() {
  const availableRoutes = ref(null)
  const allRoutes = ['add', 'tasks', 'login', 'register']
  availableRoutes.value = allRoutes.filter((item) => item)

  return { availableRoutes }
}
