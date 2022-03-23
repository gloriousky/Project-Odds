<template>
  <div class="container mx-auto box-border">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/odds">Go to odds</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>