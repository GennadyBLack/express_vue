import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTaskById } from '../../api/task'
export default () => {
  const editTaskForm = ref(null)
  const route = useRoute()
  const taskid = route?.params?.id

  const fetchTask = async () => {
    try {
      editTaskForm.value = (await getTaskById(taskid)).data
    } catch (error) {
      console.log(error, 'Error from fetch task')
    }
  }
  onMounted(() => {
    fetchTask()
  })

  watch(
    [id],
    (value) => {
      fetchTask()
    },
    { deep: true }
  )
}
