<script setup lang="ts">
const date: string = new Date().toLocaleDateString();
</script>

<template>
  <header>
    <h1>{{date}}</h1>
  </header>
</template>

<style scoped>

</style>
