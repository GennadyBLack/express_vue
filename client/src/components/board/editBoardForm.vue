<template>
  <Spiner v-if="!board" />
  <div class="form w-50" v-if="board">
    <Field
      v-model="board.title.val"
      :rules="{ required: true }"
      :placeholder="'Название'"
      name="mail"
      :class="'form-field'"
      label="Название: "
    />
    <Field
      v-model="board.description.val"
      :rules="{ required: true }"
      :placeholder="'Описание'"
      name="mail"
      :class="'form-field'"
      label="Описание: "
    />
    <Field
      v-model="board.background.val"
      :rules="{ required: true }"
      :placeholder="'Фон'"
      name="mail"
      :class="' form-field'"
      label="Фон: "
    />
    <button class="btn save-btn" @click="saveBoardForm">Сохранить</button>
  </div>
</template>
<script setup>
import { Form, Field, Spiner } from 'rdbxxx'
import useEditBoard from '../../composables/boardComposables/useEditBoard'
const { board, saveBoardForm } = useEditBoard()
</script>
