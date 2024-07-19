import api from './index'

const table_columns = {
  delete: async (id) => {
    return await api.delete(`/table_columns/${id}`)
  },
  create: async (data) => api.post(`/table_columns/`, data),
  update: async (id, data) => api.patch(`/table_columns/${id}`, data),
  getAll: async (config) => api.get(`/table_columns`, config),
  get: async (id, config) => api.get(`/table_columns/${id}`, config),
}
export default table_columns
