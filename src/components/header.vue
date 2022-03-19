<template>
  <nav class="flex justify-between bg-gray-300 p-2">
    <div>
      <img src="" alt="" />
      <h1>挖！影</h1>
    </div>
    <div class="border">
        <input type="text" placeholder="搜尋劇名 / 演員">
    </div>
    <ul class="flex justify-around text-white w-1/2">
      <li class="mr-3" v-for="(item, index) in navBarList" :key="index">
        <a :href="item.url"> {{ item.name }}</a>
      </li>
    </ul>
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
        { name: "電影", url: "./movie" },
        { name: "戲劇", url: "./drama" },
        { name: "主題館", url: "./theme" },
        { name: "我的片單", url: "list" },
      ],
    };
  },
  mounted() {
      // console.log(Utils.isLink('https://www.google.com/'))
      
  },
  methods: {},
};
</script>
<style>
</style>
