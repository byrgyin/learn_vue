<script setup lang="ts">
import {ref} from "vue";
import AppInput from "@/components/AppInput.vue";

interface errosType {
  name: string | null;
}


const name = ref<string>('');
const age = ref<number>(23);
const city = ref<string>('nsk');
const relocate = ref<string>('');
const skills = ref<string[]>([]);
const agree = ref<boolean>(false);
const errors = ref<errosType>({
  name: null,
})


const formIsValid = (): boolean => {
  let isValid: boolean = true;
  if (name.value.length === 0) {
    errors.value.name = 'Name is required';
    isValid = false;
  } else{
    errors.value.name = null;
  }

  return isValid;
}
const submitHandler = (): void => {
  if (formIsValid()) {
    console.group('Form Data')
    console.log(`Name: ${name.value}`);
    console.log(`Age: ${age.value}`);
    console.log(`City: ${city.value}`);
    console.log(`relocate: ${relocate.value}`);
    console.log(`skills: ${skills.value}`);
    console.log(`agree: ${agree.value}`);
    console.groupEnd();
  }
}

</script>
<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <AppInput
        label="Как тебя зовут?"
        :error="errors.name"
        placeholder="Введите имя"
        v-model:value="name"
      ></AppInput>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          value="20"
          max="70"
          v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="relocate" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="relocate" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vuex"/>Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="CLI"/>Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Router"/>Vue
            Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила нашей компании?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" value="Agree"/>С правилами согалсен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<style scoped>
.form-control small{
  color: red;
}
.form-control.invalid input{
  border: 1px solid red;
}
</style>
