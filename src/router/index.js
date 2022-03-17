import { createRouter, createWebHistory } from "vue-router";
const routes = [
    { path: "/home", redirect: "/" }    
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });