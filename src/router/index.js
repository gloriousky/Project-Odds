import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home.vue'
import Odds from '../views/odds.vue'
import News from '../views/news.vue'

const routes = [
    { path: "/",component:Home },
    {path: '/odds',component:Odds}, 
    {path: '/news',component:News} 
  ];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });