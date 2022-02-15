import { ref, computed } from 'vue'
import { createTask as addTask } from '@/api/task'

export default () => {
  const task = ref(null)

  const createTask = async (id) => {
    await addTask(id, { title: task.value })
  }

  const deleteTask = (id) => {
    try {
      deleteTaskById(id)
    } catch (error) {
      console.log(error)
    }
  }
  const setTask = (value) => {
    task.value = value
  }

  return {
    task,
    createTask,
    deleteTask,
    setTask,
  }
}
