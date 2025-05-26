<script setup lang="ts">

</script>

<template>
  <div class="form-control" :class="{invalid: errors.name}">
    <label for="name">Как тебя зовут?</label>
    <input
      type="text"
      id="name"
      placeholder="Введи имя"
      v-model.trim="name"
    >
    <small v-if="errors.name">{{ errors.name }}</small>
  </div>
</template>

<style scoped>

</style>
