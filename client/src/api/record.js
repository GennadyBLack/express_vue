import api from './index'

const record = {
  delete: async (id) => {
    return await api.delete(`/records/${id}`)
  },
  create: async (data) => api.post(`/records/`, data),
  update: async (id, data) => api.patch(`/records/${id}`, data),
  getAll: async (config) => api.get(`/records`, config),
  get: async (id, config) => api.get(`/records/${id}`, config),
}
export default record
