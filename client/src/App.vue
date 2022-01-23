<template>
<div class='app_container'>
 <component :is="layout" />
 <Errors/>
</div>
</template>

<script>
import Errors from './components/transitions/Errors'
import DefaultLayout from './layouts/DefaultLayout.vue'
export default {
    name: 'app',
    components: {
        // MainMenu,
        // SidebarMenu,
        DefaultLayout,
        // CreateLayout,
        // ModalCreateLayout,
        // AuthLayout,
        Errors
    },
    mounted() {
        // this.$router.push("/profile");
    },
    computed: {
        layout() {
            return this.$route.meta.layout
        }
    }
}
</script>