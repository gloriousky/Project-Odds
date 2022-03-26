<template>
  <div class="container w-full box-border">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/header.vue'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>