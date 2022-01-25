import {ref} from 'vue'
import {me} from '../../api/auth'

const current_user = ref(null)

const fetchCurrentUser =()=>{
    try {
          me().then(res=>current_user.value = res.data)
    } catch (error) {
        
    }
}

export default {
    current_user,fetchCurrentUser
}