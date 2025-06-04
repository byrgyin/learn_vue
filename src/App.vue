<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import {isAuth} from "@/apiHelper/helpers.ts";
</script>

<template>
  <TheNavbar :visible="isAuth"/>
  <div class="container with-nav">
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
