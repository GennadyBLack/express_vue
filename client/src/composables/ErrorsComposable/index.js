import { ref } from 'vue'

export const errors = ref([])

export const setError = (message) => {
  errors.value.push({
    error_message: message,
    index: errors.value.lenght,
  })
}

export const deleteError = (index) => {
  errors.value = errors.value.filter((el) => el.index !== index)
}
