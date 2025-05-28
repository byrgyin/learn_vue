<script setup lang="ts">
defineProps<{
  people: string[]
}>();
defineEmits<{
  (e:'load'): void;
}>();
</script>

<template>
  <div class="card">
    <div v-if="people.length !== 0" v-for="person in people">
      <h3>{{ person }}</h3>
    </div>
    <div v-else>
      <h4>Don't have people</h4>
      <button class="btn" @click="$emit('load')">Load List</button>
    </div>
  </div>
</template>

<style scoped>

</style>
