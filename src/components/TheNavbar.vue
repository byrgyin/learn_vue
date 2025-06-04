<script setup lang="ts">
import {logout} from "@/apiHelper/helpers.ts";

defineProps<{
  visible:boolean
}>();
</script>

<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Главная</router-link></li>
      <li>
        <router-link to="/mail">Почта</router-link>
      </li>
      <li><a href="#" @click.prevent="logout()">Выйти</a></li>
    </ul>
  </header>
</template>

<style scoped>
header{
  background: #ffffff;
}
.navbar .active {
  outline: 1px solid greenyellow;
}
</style>
