<script setup lang="ts">
const props = defineProps<{
  color?:'regular' | 'red' | 'green';
}>();
const emit = defineEmits<{
  (e:'action'): void;
}>();
</script>

<template>
  <button :class="color" @click="$emit('action')"><slot/></button>
</template>

<style scoped>
.red{
  background: red;
}
.green{
  background: green;
}
</style>
