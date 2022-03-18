import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    { path: "/home", redirect: "/" }    
  ];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });