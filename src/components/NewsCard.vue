<script setup lang="ts">
import {ref} from "vue";
import Button from "@/components/Button.vue";

const props = defineProps<{
  title: string;
  id: number;
  isOpen: boolean;
  wasRead: boolean;
}>();
const emit = defineEmits<{
  (e:'onclick:openNews'):void;
  (e:'onclick:readNews'):void;
  (e:'onclick:unReadNews'):void;
}>();

let isNewOpen = ref(props.isOpen);
let isWasRead = ref(props.wasRead);

const open = ():void=>{
  isNewOpen.value = !isNewOpen.value;
  if(isNewOpen.value)emit("onclick:openNews");
}
const mark = ():void=>{
  emit("onclick:readNews");
  isWasRead.value = !isWasRead.value;
}
const unMark = ():void=>{
  emit("onclick:unReadNews");
  isWasRead.value = !isWasRead.value;
}
</script>

<template>
  <li class="card">
    <h3>{{title}}</h3>
    <Button @action="open" color="regular">{{isNewOpen ? 'Close' : 'Open'}}</Button>
    <p v-if="isNewOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque, eius eligendi error expedita harum iusto maxime, nam nesciunt nostrum officiis quisquam repellendus, reprehenderit sapiente sit soluta temporibus unde voluptatem.</p>
    <Button @action="mark" v-if="!isWasRead" color="green">Read this news</Button>
    <Button @action="unMark" v-if="isWasRead" color="red">UnRead this news</Button>
  </li>
</template>

<style scoped>

</style>
