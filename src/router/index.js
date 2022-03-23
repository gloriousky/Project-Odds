import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home.vue'
import Odds from '../views/odds.vue'

const routes = [
    { path: "/",component:Home },
    {path: '/odds',component:Odds} 
  ];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });