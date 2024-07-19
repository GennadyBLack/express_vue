import api from './index'

const table = {
  delete: async (id) => {
    return await api.delete(`/tables/${id}`)
  },
  create: async (data) => api.post(`/tables/`, data),
  update: async (id, data) => api.patch(`/tables/${id}`, data),
  getAll: async (config) => api.get(`/tables`, config),
  get: async (id, config) => api.get(`/tables/${id}`, config),
  getRecords: async (id, config) => api.get(`/tables/${id}/records`, config),
  createData: async (id, data) => api.post(`/tables/${id}`, data),
}
export default table
