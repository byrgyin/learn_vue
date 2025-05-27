<script setup lang="ts">
defineProps<{
  label:string,
  error:string | null,
  placeholder:string,
  value:string,
}>();
const emit = defineEmits<{
  (e:'update:value'):void;
}>();
const id:string = 'input-'+Math.random();

const change = (event):void=>{
  emit('update:value', event.target.value);
}
</script>

<template>
  <div class="form-control" :class="{invalid: error}">
    <label :for="id">{{label}}</label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="change"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<style scoped>

</style>
