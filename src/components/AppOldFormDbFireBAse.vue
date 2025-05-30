<script setup lang="ts">
import {onMounted, ref} from "vue";
import AppPeopleList from "@/components/AppPeopleList.vue";
import axios, {type AxiosPromise} from "axios";
import AppAlert from "@/components/AppAlert.vue";
import AppLoader from "@/components/AppLoader.vue";

interface postBoyd {
  method:string,
  headers: {'Content-Type':string},
  body:string
}

interface userBoyd {
  id:string,
  firstname:string
}

interface alertMessage{
  type:string,
  title:string,
  text:string
}

const name = ref<string | null>('');
let alert = ref<alertMessage | null>(null);
let people = ref<userBoyd[]>([]);
let loading = ref<boolean>(false);

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
    loading.value = true;
    const {data} = await axios.get(url);
    if(!data){
      loading.value = false;
      throw new Error('List of people is empty');
    }
    people.value = Object.keys(data).map(key => {
      return{
        id:key,
        ...data[key]
      }
    });
    console.log(loading.value);
    loading.value = false;
  } catch (error){
    console.log(error);
    alert.value = {
      type:"danger",
      title:"Error",
      text:(error as Error).message
    }
  }
}
const removePerson = async (id:string):Promise<void>=>{
  try {
    const name = people.value.find(person => person.id === id )?.firstname;
    await axios.delete(`https://vue-http-aa233-default-rtdb.firebaseio.com/person/${id}.json`);
    people.value = people.value.filter(person => person.id !== id);
    alert.value = {
      type:"primary",
      title:"Success!",
      text:`User width name ${name} successfully removed!`
    }
  } catch (error){
    console.log(error);
  }
};
onMounted(()=>{
  loadPeople();
})
</script>
<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Work with Data Base</h2>
      <AppAlert :alert="alert" @close="alert=null"/>
      <div class="form-control">
        <label for="name">Enter Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          v-model.trim="name">
      </div>
      <div class="form-control">
        <button type="submit" class="btn primary" :disabled="name?.length === 0">Create Person
        </button>
      </div>
    </form>
    <AppLoader v-if="loading"/>
    <AppPeopleList
      v-else
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
