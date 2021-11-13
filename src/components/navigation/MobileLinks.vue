<template>
  <div class="md:hidden absolute right-4 top-5 flex items-center">
    <button class="outline-none mobile-menu-button">
      <svg
        @click="toggleMenu"
        class="w-10 h-10 text-white"
        x-show="!showMenu"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

  <div
    v-show="showMenu"
    class="md:hidden absolute left-10 top-24 bg-white z-50 w-10/12 rounded-md"
  >
    <div class="border-b-2 w-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >Home
    </div>
    <div class="border-b-2 w-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >Get a quote
    </div>
    <div class="border-b-2 w-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >See our work
    </div>
    <div class="border-b-2 w-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >Our services
    </div>
    <div class="border-b-2 w-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >Contact us
    </div>
    <div class="flex w-full p-3">
      <img
        src="../../assets/images/social-icons/facebook_small.png"
        class="inline ml-4 mr-4"
      />
      <img
        src="../../assets/images/social-icons/instagram_small.png"
        class="inline"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileLinks",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
