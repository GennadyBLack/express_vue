<template>
  <div :class="customClass">
    <slot name="activator" :toggle="toggle" :isShow="isShow"> </slot>
    <slot name="content" v-if="isShow"> </slot>
    <slot name="buttons"> </slot>
  </div>
</template>

<script>
export default {
  name: 'ToggleProvider',
  props: ['customClass'],
  data() {
    return {
      isShow: false,
    }
  },
  computed: {},
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped></style>
