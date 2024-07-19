import api from './index'

const field_values = {
  delete: async (id) => {
    return await api.delete(`/field_values/${id}`)
  },
  create: async (data) => api.post(`/field_values/`, data),
  update: async (id, data) => api.patch(`/field_values/${id}`, data),
  getAll: async (config) => api.get(`/field_values`, config),
  get: async (id, config) => api.get(`/field_values/${id}`, config),
}
export default field_values
