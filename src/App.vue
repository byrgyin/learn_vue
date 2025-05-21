<script setup lang="ts">
import {RouterView} from 'vue-router'
import {ref} from "vue";
import Header from "@/components/Header.vue";
import NewsCard from "@/components/NewsCard.vue";

interface NewsItem {
  title: string;
  id: number;
  isOpen: boolean;
  wasRead: boolean;
}
const nowDate:string = new Date().toLocaleDateString();
let openRate=ref<number>(0);
let readRate=ref<number>(0);
const news: NewsItem[] = [
  {
    title: 'Joe',
    id: 1,
    isOpen: false,
    wasRead: false
  },
  {
    title: 'Qoe',
    id: 2,
    isOpen: false,
    wasRead: false
  },
  {
    title: 'Foe',
    id: 3,
    isOpen: false,
    wasRead: false
  },
];
const openNews = ():void => {
  openRate.value++;
}
const readNews = ():void=>{
  readRate.value++;
}
const unReadNews = ():void=>{
  readRate.value--;
}
</script>
<template>
  <Header/>
  <h2>Актульные новости на {{nowDate}}</h2>
  <div>Открыто: <strong>{{openRate}}</strong> | Прочитано: <strong>{{ readRate }}</strong> </div>
  <ul class="lis">
    <NewsCard
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @onclick:openNews="openNews"
      @onclick:readNews="readNews"
      @onclick:un-read-news="unReadNews"
    />
  </ul>
  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
strong{
  font-weight: bold;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
