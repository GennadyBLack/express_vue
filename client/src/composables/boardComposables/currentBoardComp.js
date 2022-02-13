import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBoardById } from '@/api/board'
import { createBoard } from '@/api/user'
import { createColumn } from '@/api/column'
import { createTask as addTask } from '@/api/task'

export default () => {
  const route = useRoute()

  const board = ref(null)

  const id = computed(() => route?.params?.id)

  const fetchBoard = async () => {
    try {
      board.value = (await getBoardById(id?.value)).data
    } catch (error) {
      console.log(error, 'FROM BOARD COMPOSABLE')
    }
  }

  const createUserBoard = () => {
    createBoard(2, {
      title: 'Boar',
      description: 'desv',
      background: 'red',
    })
  }

  const createColunm = async () => {
    const data = { order: 1, title: 'column', description: 'fdf' }
    await createColumn(id?.value, data)
  }

  const createTask = async (id) => {
    const data = { title: 'task', description: 'description', order: 1 }
    await addTask(id, data)
  }
  watch(
    [id],
    (value) => {
      fetchBoard()
    },
    { deep: true }
  )

  return {
    board: computed(() => board.value),
    fetchBoard,
    id,
    createUserBoard,
    createColunm,
    createTask,
  }
}
