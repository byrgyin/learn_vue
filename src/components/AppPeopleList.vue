<script setup lang="ts">
interface userBoyd {
  id:string,
  firstname:string
}
defineProps<{
  people: userBoyd[]
}>();
defineEmits<{
  (e:'load'): void;
  (e:'remove', value:string): void;
}>();
</script>

<template>
  <div
    class="card"
    v-if="people.length !== 0"
    v-for="person in people"
    :key="person.id"
  >
    <h3>{{ person.firstname }}</h3>
    <button
      class="btn danger"
      @click="$emit('remove', person.id)"
    >Delete Person</button>
  </div>
  <div class="card" v-else>
    <h4>Don't have people</h4>
    <button
      class="btn"
      @click="$emit('load')"
    >Load List</button>
  </div>
</template>

<style scoped>

</style>
