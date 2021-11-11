<template>
  <TopNav />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<script>
import TopNav from "./components/navigation/TopNav.vue";
export default {
  name: "App",
  components: { TopNav },
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
