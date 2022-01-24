<template>
<div>
<input type="text" v-model='email'>
<input type="text" v-model='password'>
<input type="text" v-model='username'>
<button @click='register'>login</button>
</div>
</template>
<script>
import {register} from '../../api/auth'
export default {
    name:'Login',
    data(){
        return {
            email:'adminus@mail.ru',
            password:'adminus',
            username:'adminus'
        }
    },
    methods:{
        register(){
            console.log('register')
            register({user:{email:this.email,password:this.password,username:this.username}}).then(res=>console.log(res,'res-LOGIN'))
        }
    }
}
</script>