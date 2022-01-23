import api from './index'

export const getAllTasks = () =>{
    return api.get('/tasks',{})
}

export const deleteTaskById = (id) =>{
    return api.delete('/task',{id})
}