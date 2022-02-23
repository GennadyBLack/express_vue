<template>
  <div>
    <label :for="id">
      {{ label }}
    </label>
    <textarea
      v-if="textarea"
      v-model="model"
      :id="id"
      class="input placeholder"
      :placeholder="placeholder"
      :type="type"
      v-maska="maska"
      :disabled="disabled"
      :style="{ height: `${col * 51}px` }"
    ></textarea>
    <input
      v-else
      v-model="model"
      :id="id"
      class="input placeholder"
      :placeholder="placeholder"
      :type="type"
      v-maska="maska"
      :disabled="disabled"
      :style="{ height: `${col * 51}px` }"
    />
  </div>
</template>
<script>
export default {
  emits: ['input:modelValue'],
  name: 'InputField',
  data() {
    return {
      id: null,
    }
  },
  props: {
    type: {
      type: [String],
    },
    name: {
      type: [String, Number],
      required: true,
    },
    rules: {
      type: [String, Object, Function],
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    maska: {
      type: [String, Array],
    },
    modelValue: {
      type: [String, Number, Array],
    },
    disabled: {
      type: [Boolean],
    },
    size: {
      type: String,
      default: 'sm',
    },
    col: {
      type: Number,
      default: 1,
    },
    textarea: { type: Boolean, default: false },
  },
  mounted() {
    this.id = this._uid
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('input:modelValue', newValue)
      },
    },
  },
}
</script>
<style>
textarea {
  padding-top: 10px !important;
}
</style>
