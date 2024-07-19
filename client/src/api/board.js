import api from './index'

export const deleteBoardById = (id) => {
  return api.delete('/boards', { id })
}

export const createBoard = (id, data) => {
  return api.post(`/users/${id}/boards`, data)
}

export const updateBoard = (id, data) => {
  return api.patch('/boards/' + id, { data })
}

export const getBoardById = (id, config) => {
  return api.get(`/boards/${id}`, config)
}

export const testBoard = (config) => {
  return api.get(`/boardsus`, config)
}

const board = {
  delete: async (id) => {
    return await api.delete('/boards', { id })
  },
  create: async (id, data) => {
    return await api.post(`/users/${id}/boards`, data)
  },
  update: async (id, data) => {
    return await api.patch('/boards/' + id, { data })
  },
  get: async (id, config) => {
    return await api.get(`/boards/${id}`, config)
  },
  test: async (config) => {
    return await api.get(`/boardsus`, config)
  },
}

export default board
