import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const logout = () => {
    saveToken()
    setNotice('Are you logout')
    router.push('login')
  }

  return {
    logout,
  }
}
