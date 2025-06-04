import type {Email} from "@/apiHelper/types.ts";
import {ref} from "vue";
import router from "@/router";
import { useRoute } from 'vue-router'
export let isAuth = ref<boolean>(false);

export const emails: Email[] = [
  {id:1, theme:"Купил себе PlayStation 5"},
  {id:2, theme:"Выучил Vue Route"},
  {id:3, theme:"Хочу изучить весь Vue'"},
  {id:4, theme:"А следующий блок про Vuex!"},
  {id:5, theme:"А что там на счет Vue Hooks?"},
]

export const login = ():void=>{
  isAuth.value = true;
  router.push("/dashboard");
}

export const logout = ():void=>{

  isAuth.value = false;
  router.push("/login");
}
