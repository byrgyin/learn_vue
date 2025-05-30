<script setup lang="ts">
defineProps<{
  alert:{
    type:string,
    title:string,
    text:string
  }
}>();
defineEmits<{
  (e:'close'): void;
}>()
</script>

<template>
  <div
    v-if="alert"
    class="alert"
    :class="alert.type"
  >
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <button class="btn" :class="alert.type" @click="$emit('close')">CLose</button>
  </div>
</template>

<style scoped>

</style>
