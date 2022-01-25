import { ref } from 'vue'
import { me } from '../../api/auth'

export const current_user = ref(null)

export const fetchCurrentUser = () => {
  try {
    me().then((res) => (current_user.value = res.data))
  } catch (error) {
    console.log(error, 'from curent')
  }
}
export const setCurrentUser = (data) => {
  current_user.value = data
}
