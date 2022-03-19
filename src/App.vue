<template>
  <Header></Header>
</template>
<script>
import Header from "./components/header.vue";
import Api from "./api/request.js";
export default {
  name: "App",
  components: {
    Header,
    Api,
  },
  data() {
    return {};
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      Api("get", "157336").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style>
</style>
