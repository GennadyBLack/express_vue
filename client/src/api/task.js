import api from './index'

export const getAllTasks = () => {
  return api.get('/tasks', {})
}

export const deleteTaskById = (id) => {
  return api.delete('/task', { id })
}

export const createTask = (data) => {
  return api.post('/task', { data })
}

export const updateTask = (id, data) => {
  return api.patch('/task/' + id, { data })
}
