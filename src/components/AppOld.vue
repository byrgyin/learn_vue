<script setup lang="ts">
import {RouterView} from 'vue-router'
import {computed, ref, defineAsyncComponent} from "vue";
import Button from "@/components/Button.vue";
import AppTextOne from "@/components/AppTextOne.vue";
import AppTextTwo from "@/components/AppTextTwo.vue";


let active = ref<string>('one');

const AppAsyncComponent = defineAsyncComponent(()=> import('./components/AppAsyncComponent.vue'));

const componentName = computed(()=>active.value === 'one' ? AppTextOne : AppTextTwo);
const oneColor = computed(() => active.value === 'one' ? 'primary' : ''),
  twoColor = computed(() => active.value === 'two' ? 'primary' : '');

</script>
<template>
  <div class="card">
    <AppAsyncComponent/>
    <h2>Динамическая и асинхронные компоненты</h2>
    <Button
      :color="oneColor"
      @action="active = 'one'"
    >One</Button>
    <Button
      :color="twoColor"
      @action="active = 'two'"
    >Two</Button>
  </div>

  <keep-alive>
    <component :is="componentName"/>
  </keep-alive>
</template>

<style scoped>

</style>
