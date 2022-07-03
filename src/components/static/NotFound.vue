<template>
  <div class="text-center grid grid-cols-1" v-if="!showComingSoon">
    <p class="block py-3 text-5xl text-gray-200 font-coastal-body">Page not found!</p>
    <p class="text-lg text-gray-300 font-coastal-body">
      It looks like the page you're looking for has either moved or doesn't exist.
    </p>
    <p></p>
  </div>
  <div class="text-center grid grid-cols-1" v-else>
    <p class="block py-3 text-5xl text-gray-200 font-coastal-body">Page coming soon!</p>
    <p class="text-lg text-gray-300 font-coastal-body">
      We're working on creating this page. Please check back soon.<br />
      Have questions right now? Please
      <router-link to="/contact-us" class="font-bold underline">contact us</router-link> in the meantime!
    </p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      showComingSoon: false,
    };
  },
  mounted() {
    if (this.$route.params.catchAll.includes("services/")) {
      this.showComingSoon = true;
    }
  },
};
</script>
