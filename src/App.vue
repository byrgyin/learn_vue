<script setup lang="ts">
import {onMounted, ref} from "vue";
import AppPeopleList from "@/components/AppPeopleList.vue";
import axios, {type AxiosPromise} from "axios";


interface postBoyd {
  method:string,
  headers: {'Content-Type':string},
  body:string
}

interface userBoyd {
  id:string,
  firstname:string
}

const name = ref<string | null>('');
let people = ref<userBoyd[]>([]);

const url: string = 'https://vue-http-aa233-default-rtdb.firebaseio.com/person.json';

const createPerson = async (): Promise<void> => {
  const options:postBoyd = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({firstname:name.value})
  };
  try {
    await fetch(url, options);
    name.value = '';
    await loadPeople();
  } catch (error) {
    console.error(error);
  }
};

const loadPeople = async ():Promise<void>=>{
  try {
    const {data} = await axios.get(url);
    people.value = Object.keys(data).map(key => {
      return{
        id:key,
        ...data[key]
      }
    });
  } catch (error){
    console.error(error);
  }
}
const removePerson = async (id:string):Promise<void>=>{
  await axios.delete(`https://vue-http-aa233-default-rtdb.firebaseio.com/person/${id}.json`);
  loadPeople();
};
onMounted(()=>{
  loadPeople();
})
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
      @remove="removePerson"
    />
  </div>
</template>

<style scoped>
.btn.primary:disabled {
  opacity: 0.5;
}
</style>
