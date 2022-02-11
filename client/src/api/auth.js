import api from './index'

export const login = (data) => {
  return api.post('/auth/login', data, data)
}

export const register = (data) => {
  return api.post('/auth/register', data, data)
}

export const me = () => {
  return api.post('/auth/me', {})
}
// export const deleteTaskById = (id) =>{
//     return api.delete('/task',{id})
// }
