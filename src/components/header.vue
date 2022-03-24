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
<script>
import Utils from '../utility/util.js'
export default {
  name: "header",
  components:{
      Utils
  },
  data() {
    return {
      navBarList: [
        { name: "Home", url: "./" },
        { name: "Odds", url: "./odds" },
        { name: "News", url: "./news" },
      ],
    };
  },
  mounted() {    
  },
  methods: {},
};
</script>
<style>
</style>
