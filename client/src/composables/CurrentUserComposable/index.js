import { ref, computed } from 'vue'
import { me } from '../../api/auth'

export const current_user = computed(() => {
  return user.value
})

export const user = ref(null)
export const fetchCurrentUser = () => {
  try {
    me().then((res) => (user.value = res.data.user))
  } catch (error) {
    console.log(error, 'from curent')
  }
}
export const setCurrentUser = (data) => {
  user.value = data
}
