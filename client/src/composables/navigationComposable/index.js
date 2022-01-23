import {ref} from 'vue'

export function MainMenuComposable() {
    const availableRoutes =ref(null)
     const allRoutes = [
         'add','search','tasks'
     ]
     availableRoutes.value = allRoutes.filter(item=>item)

    return {availableRoutes}
}