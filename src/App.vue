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
  mounted() {
     document.body.style.backgroundColor = "black";
  }
};
</script>

<style>
#app {
  background-color: black;
  height: 100vh;
  position: relative;
}
</style>
