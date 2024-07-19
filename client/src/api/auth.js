import api from './index'

export const login = (data) => {
  return api.post('/auth/login', data, data)
}

export const register = (data) => {
  return api.post('/auth/register', data, data)
}

export const me = (config = {}) => {
  console.log(config, 'config')
  return api.post('/auth/me', {}, config)
}

const auth = {
  login: async (data) => {
    return await api.post('/auth/login', data, data)
  },
  register: async (data) => {
    return await api.post('/auth/register', data, data)
  },
  me: async (config = {}) => {
    return await api.post('/auth/me', {}, config)
  },
}
export default auth
