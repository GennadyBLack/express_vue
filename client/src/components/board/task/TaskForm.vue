<template>
  <div class="task-form__title">
    {{ task?.title }}
    <div class="" @click="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512.001 512.001"
        xml:space="preserve"
      >
        <path
          style="fill: #ff6465"
          d="M256.001,512c141.384,0,255.999-114.615,255.999-256.001C512.001,114.615,397.386,0,256.001,0  S0.001,114.615,0.001,256.001S114.616,512,256.001,512z"
        />
        <path
          style="opacity: 0.1; enable-background: new"
          d="M68.873,256.001c0-129.706,96.466-236.866,221.564-253.688  C279.172,0.798,267.681,0,256.001,0C114.616,0,0.001,114.615,0.001,256.001S114.616,512.001,256,512.001  c11.68,0,23.171-0.798,34.436-2.313C165.339,492.865,68.873,385.705,68.873,256.001z"
        />
        <path
          style="fill: #ffffff"
          d="M313.391,256.001l67.398-67.398c4.899-4.899,4.899-12.842,0-17.74l-39.65-39.65  c-4.899-4.899-12.842-4.899-17.74,0l-67.398,67.398l-67.398-67.398c-4.899-4.899-12.842-4.899-17.74,0l-39.65,39.65  c-4.899,4.899-4.899,12.842,0,17.74l67.398,67.398l-67.398,67.398c-4.899,4.899-4.899,12.842,0,17.741l39.65,39.65  c4.899,4.899,12.842,4.899,17.74,0l67.398-67.398L323.4,380.79c4.899,4.899,12.842,4.899,17.74,0l39.65-39.65  c4.899-4.899,4.899-12.842,0-17.741L313.391,256.001z"
        />
      </svg>
    </div>
  </div>
  <Form class="task-form" rowClass="task-form__row">
    <div class="">Заголовок</div>
    <Field field="textarea" name="description" v-model="form.title" />
    <div class="task-form__desc">
      <div class="">Описание</div>
      <Field
        field="textarea"
        name="description"
        v-model="form.description"
        col="12"
      />
      <Btn @click="submitForm" class="task-form__btn">Сохранить</Btn>
    </div>
  </Form>
</template>
<script setup>
import { updateTask } from '@/api/task'
import { Field, Form, Btn, Utils } from 'rdbxxx'
const props = defineProps({
  task: Object,
  updateBoard: Function,
  close: Function,
})
const emit = defineEmits(['updateTask', 'updateBoard'])

const form = Utils.cloneDeep(props.task)

const submitForm = async () => {
  try {
    await updateTask(props?.task?.id, form).then((res) => {
      console.error(res?.data)
      emit('updateBoard', res.data)
    })
  } catch (error) {
    console.error(error)
  }
}
</script>
