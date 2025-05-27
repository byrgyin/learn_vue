<script setup lang="ts">
import {ref} from "vue";

const name = ref<string | null>('');

const createPerson = ():void=>{
//https://vue-http-aa233-default-rtdb.firebaseio.com/
};
</script>
<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Work with Data Base</h2>

      <div class="form-control">
        <label for="name">Enter Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          v-model.trim="name">
      </div>
      <div class="form-control">
        <button type="submit" class="btn primary" :disabled="name.length === 0">Create Person</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.btn.primary:disabled {
  opacity: 0.5;
}
</style>
