<template>
<div>
<input type="text" v-model='email'>
<input type="text" v-model='password'>
<button @click='login'>login</button>
</div>
</template>
<script>
import {login} from '../../api/auth'
export default {
    name:'Login',
    data(){
        return {
            email:'adminus@mail.ru',
            password:'adminus'
        }
    },
    methods:{
        login(){
            console.log('login')
            login({user:{email:this.email,password:this.password}}).then(res=>console.log(res,'res-LOGIN'))
        }
    }
}
</script>