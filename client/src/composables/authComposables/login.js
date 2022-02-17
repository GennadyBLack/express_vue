import { ref } from 'vue'
import { login as sendLoginForm } from '@/api/auth'
import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'

export default () => {
  const login_form = ref({ email: null, password: null, username: null })

  const editField = (name, value) => {
    login_form.value[name] = value
  }

  const login = async () => {
    await sendLoginForm(login_form.value)
      .then((res) => {
        saveToken(res.data.token),
          setNotice('Login successfull', 'success_message')
      })
      .catch(() => {
        setNotice('Login error')
      })
  }
  return {
    login_form,
    login,
    editField,
  }
}
