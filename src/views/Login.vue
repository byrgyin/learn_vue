<script setup lang="ts">
import {computed, ref} from "vue";
import {login} from "@/apiHelper/helpers.ts";

interface loginInfo {
  email:string,
  password:string
}

let formInfo = ref<loginInfo>({ email: '', password: '' });


const isValid = computed(()=>{
  return formInfo.value?.email !== '' && formInfo.value?.password !== '';
});

const submit = ()=>{
  if(isValid){
    login();
  }
};

</script>

<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="formInfo.email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="formInfo.password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <router-link to="/forget" class="btn warning">Forget Password?</router-link>
    <router-link to="/forget">Forget Password?</router-link>
  </form>
</template>

<style scoped>

</style>
