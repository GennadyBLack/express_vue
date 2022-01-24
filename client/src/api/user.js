import api from './index'

export const getAllUsers = () =>{
     return api.get('/users',{})
}

export const deleteUserById = (id) =>{
    return api.delete('/user',{id})
}