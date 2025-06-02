<script setup lang="ts">
interface PropsAlert {
  text: string,
  title: string,
  closable: {
    type: boolean,
    required: false,
    default: false,
  }
  type?: 'primary' | 'danger' | 'warning',
};
defineEmits<{
  (e:'close'):void;
}>()

const props = withDefaults(defineProps<PropsAlert>(), {
  type: 'primary'
});
</script>

<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button
      v-if="closable"
      class="btn"
      :class="type"
      @click="$emit('close')"
    >Close
    </button>
  </div>
</template>

<style scoped>

</style>
