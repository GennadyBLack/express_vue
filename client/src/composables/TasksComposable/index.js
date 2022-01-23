import {ref,computed} from 'vue'
import getAllTasks from '../../api/task'

export default ()=>{
    const tasks = ref(null)

const fetchTasks = async() =>{
    try {
        tasks.value = await getAllTasks()
    } catch (error) {
        console.log(error)
    }
    
}
const deleteTask = (id) => {
    try {
        deleteTaskById(id)
    } catch (error) {
        console.log(error)
    }
   
}
return {
    tasks,fetchTasks,deleteTask
}

}

  