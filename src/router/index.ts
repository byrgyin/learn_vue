import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import Forget from "@/views/Forget.vue";
import Dashboard from "@/views/Dashboard.vue";
import Mail from "@/views/Mail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',alias:'/', name: 'login', component: Login,
    },
    {
      path: '/forget', name: 'forget', component: Forget
    },
    {
      path: '/dashboard', name: 'dashboard', component: Dashboard
    },
    {
      path: '/mail:mailId', name: 'mail', component: Mail
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
});

export default router;
