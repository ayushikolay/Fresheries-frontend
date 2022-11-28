<template>
  <div>
    <!-- <FrontPage msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import FrontPage from "./Views/FrontPage.vue";

export default {
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
  },
  components: {
    // FrontPage,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
