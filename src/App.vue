<template>
  <TopNav />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <BottomNav />
</template>

<script>
import TopNav from "./components/navigation/TopNav.vue";
import BottomNav from "./components/navigation/BottomNav.vue";

export default {
  name: "App",
  components: { TopNav, BottomNav },
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
