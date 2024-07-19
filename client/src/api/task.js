import api from './index'

export const getAllTasks = () => {
  return api.get('/tasks', {})
}

export const deleteTaskById = (id) => {
  return api.delete('/task', { id })
}

export const createTask = (id, data) => {
  return api.post(`/columns/${id}/task`, data)
}

export const updateTask = (id, data) => {
  return api.patch('/task/' + id, { data })
}

export const getTaskById = (id) => {
  return api.get(`task/${id}`)
}

const task = {
  delete: async (id) => {
    return await api.delete('/task', { id })
  },
  create: async (id, data) => {
    return await api.post(`/columns/${id}/task`, data)
  },
  update: async (id, data) => {
    return await api.patch('/task/' + id, { data })
  },
  getTaskById: async (id) => {
    return await api.get(`task/${id}`)
  },
}

export default task
