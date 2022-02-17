import { ref } from 'vue'
import { register as sendRegisterForm } from '@/api/auth'
import { setNotice } from '../ErrorsComposable'

export default () => {
  const register_form = ref({ email: null, password: null, username: null })

  const editField = (name, value) => {
    register_form.value[name] = value
  }

  const register = async () => {
    await sendRegisterForm(register_form.value)
      .then((res) => setNotice('Register successfull', 'success_message'))
      .catch(() => {
        setNotice('Register error')
      })
  }
  return {
    register_form,
    register,
    editField,
  }
}
