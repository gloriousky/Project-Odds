<template>
  <nav class="flex justify-between items-center bg-sky-700 p-2 w-full h-12 fixed z-10 top-0">
    <a href="./">
      <img src="/covers-full-white-text.svg" alt="">
    </a>  
    <ul class="flex justify-around text-gray-400">
      <li class="mx-6 hover:text-white" v-for="(item, index) in navBarList" :key="index">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
    <span></span>
    <span></span>
  </nav>
</template>
<script type="module">
import { ref } from 'vue'
export default {
  setup(){
    const navBarList = ref([
        { name: "Home", url: "./" },
        { name: "Odds", url: "./odds" },
      ])
    return {
      navBarList
    }
  } 
};
</script>
