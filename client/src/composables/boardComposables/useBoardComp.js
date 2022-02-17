import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBoardById } from '@/api/board'
import { createBoard } from '@/api/user'
import { createColumn } from '@/api/column'
import { createTask as addTask } from '@/api/task'
import { setNotice } from '../ErrorsComposable'

import { current_user } from '../CurrentUserComposable/index'

export default () => {
  const route = useRoute()
  const board = ref(null)
  const id = computed(() => route?.params?.id)

  const fetchBoard = async () => {
    try {
      if (current_user.value.id && id) {
        board.value = (await getBoardById(id?.value)).data
      } else {
        setNotice('need authorize or create board')
      }
    } catch (error) {
      console.log(error, 'FROM BOARD COMPOSABLE')
    }
  }

  const createUserBoard = () => {
    try {
      console.log(current_user.value.id, 'id')
      createBoard(current_user.value.id, {
        title: 'Boar',
        description: 'desv',
        background: 'red',
      })
        .then((res) => (board.value = res.data))
        .catch((error) => setNotice(`Не получилось созжать доску`))
    } catch (error) {
      setNotice('error from board create')
    }
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

  onMounted(() => {
    fetchBoard()
  })

  return {
    board: computed(() => board.value),
    fetchBoard,
    id,
    createUserBoard,
    createColunm,
    createTask,
  }
}
