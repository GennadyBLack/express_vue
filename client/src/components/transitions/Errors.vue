<template>

<div class='errors-container' v-if="errors.lenght >0">
    {{errors}}
</div>

</template>
<script setup>
import {errors} from '../../composables/ErrorsComposable/index'

</script>