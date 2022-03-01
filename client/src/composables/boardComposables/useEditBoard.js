import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBoardById, updateBoard } from '@/api/board'
import { setNotice } from '../ErrorsComposable'
import {
  mappedEditForm,
  mappedSaveForm,
} from '../../helpers/Utils/mappetEditForm'

export default () => {
  const route = useRoute()
  const boardForm = ref(null)
  const id = computed(() => route?.params?.id)

  const fetchBoard = async () => {
    try {
      if (id?.value) {
        boardForm.value = mappedEditForm((await getBoardById(id?.value)).data)
      }
    } catch (error) {
      console.log(error, 'FROM BOARD COMPOSABLE')
    }
  }
  const saveBoardForm = async () => {
    console.log('alooooo')
    await updateBoard(id.value, mappedSaveForm(boardForm.value))
    // await updateBoard()
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
    board: computed(() => boardForm.value),
    fetchBoard,
    id,
    saveBoardForm,
  }
}
