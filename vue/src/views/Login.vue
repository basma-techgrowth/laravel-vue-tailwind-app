<script setup>
import store from '../store';
import {useRouter} from 'vue-router'
import CustomInput from '../components/CustomInput.vue';
const router = useRouter()

 const user = {
  email: '',
  password:''
 }

 const login = (env)=>{
  env.preventDefault();
  store.dispatch('login',user).then(()=>{
    router.push({
      name:'Dashboard'
    })
  });
 }
</script>

<template>
  <div>
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-green-900">
      Sign in
    </h2>
  </div>
  <form class="mt-8 space-y-6" @submit="login">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <CustomInput type="email" label="Email address" placeholder="Email address" autocomplete="email" for="email-address" required="" id="email-address" name="email"
        v-model="user.email"
        :isRoundedBtm="false"/>
      </div>
      <div>
        <CustomInput id="password" name="password" type="password"
          autocomplete="current-password" label="Password" placeholder="Password" required="" 
        v-model="user.password"
        :isRoundedBtm="true"/>
      </div>
    </div>
    <div>
      <button type="submit"
        class="relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        Sign in
      </button>
    </div>
  </form>
</template>

