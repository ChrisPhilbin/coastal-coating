<template>
  <TopNav />
  <div class="flex flex-col h-screen z-20" id="main-content-div">
    <div class="mb-auto pt-20 md:pt-2">
      <router-view />
    </div>
    <BottomNav />
  </div>
</template>

<script>
import TopNav from "./components/navigation/TopNav.vue";
import BottomNav from "./components/navigation/BottomNav.vue";

export default {
  name: "App",
  components: { TopNav, BottomNav },
  data() {
    return {
      companyName: "Coastal Coating",
    };
  },
  mounted() {
    document.body.style.backgroundColor = "black";
  },
};
</script>

<style>
#app {
  background-color: black;
  height: 100vh;
  position: relative;
}
</style>
