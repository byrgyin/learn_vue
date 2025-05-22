<script setup lang="ts">
const props = defineProps<{
  color?:'' | 'regular' | 'red' | 'green' | 'primary';
}>();
const emit = defineEmits<{
  (e:'action'): void;
}>();
</script>

<template>
  <button :class="color" @click="$emit('action')"><slot/></button>
</template>

<style scoped>
.regular{
  background: blue;
}
.red{
  background: red;
}
.green{
  background: green;
}
.primary{
  background: green;
  color: #ffffff;
}
</style>
