import api from './index'

export const getAllUsers = () => {
  return api.get('/users', {})
}

export const deleteUserById = (id) => {
  return api.delete('/user', { id })
}

export const test = () => {
  return api.get('/users/test', {})
}

export const createBoard = (id, data) => {
  return api.post(`/users/${id}/boards`, data)
}

const user = {
  delete: async (id) => {
    return await api.delete(`/users/${id}`, {})
  },
  createBoard: async (id, data) => {
    return await api.post(`/users/${id}/boards`, data)
  },
  getAllUsers: async () => {
    return await api.get('/users', {})
  },
  test: async () => {
    return await api.get('/users/test', {})
  },
}

export default user
