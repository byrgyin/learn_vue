<script setup lang="ts">
import AppNewAlert from "@/components/AppNewAlert.vue";
import {ref} from "vue";

let alert = ref<boolean>(false);
console.log(alert.value)

const toggleAlert = ():void => {
  alert.value = !alert.value;
}
</script>

<template>
  <div class="container">
    <AppNewAlert
      v-if="alert"
      title="Warning"
      text="This very important"
      @close="alert = false"
    />
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide' : 'Show' }} Message</button>
    </div>
  </div>
</template>

<style scoped>

</style>
