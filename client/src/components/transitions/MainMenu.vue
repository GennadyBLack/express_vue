<template>
<div class="main-menu">
    <div class="main-menu-container">
        <div class="router-list">
            <div class="router-list--item" v-for='route in availableRoutes' :key='route'>
                <router-link :to='{name:route}'>{{route}}</router-link>
            </div>
        </div>
    </div>
    </div>    
</template>
<script setup>
import {MainMenuComposable} from '../../composables/navigationComposable/index'
const {availableRoutes}  = MainMenuComposable()
</script>
