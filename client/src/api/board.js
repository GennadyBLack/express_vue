import api from './index'

export const deleteBoardById = (id) => {
  return api.delete('/boards', { id })
}

export const createBoard = (data) => {
  return api.post('/boards', { data })
}

export const updateBoard = (id, data) => {
  return api.patch('/boards/' + id, { data })
}

export const getBoardById = (id, config) => {
  return api.get(`/boards/${id}`, config)
}
