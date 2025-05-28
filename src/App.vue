<script setup lang="ts">
import {ref} from "vue";
import AppPeopleList from "@/components/AppPeopleList.vue";

const name = ref<string | null>('');
const people = ref<string[]>([]);
interface postBoyd {
  method:string,
  headers: {'Content-Type':string},
  body:string
}

const createPerson = async (): Promise<void> => {
  const options:postBoyd = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({firstname:name.value})
  };
  const url: string = 'https://vue-http-aa233-default-rtdb.firebaseio.com/person.json';
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    name.value = '';
  } catch (error) {
    console.error(error);
  }
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
        <button type="submit" class="btn primary" :disabled="name.length === 0">Create Person
        </button>
      </div>
    </form>
    <AppPeopleList
      :people="people"
      @load="loadPeople"
    />
  </div>
</template>

<style scoped>
.btn.primary:disabled {
  opacity: 0.5;
}
</style>
