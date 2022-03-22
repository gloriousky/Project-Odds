<template>
  <Header></Header>
      <vue-final-modal v-model="showModal"
       content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
      >
      Modal Content Here
    </vue-final-modal>
    <button @click="showModal = true">Open Modal</button>
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
    return {
       showModal: false
    };
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
