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
    class="md:hidden absolute left-16 bg-white z-50 opacity-95 w-2/3 rounded-md"
  >
    <div class="border-b-2 w-full p-3">Home</div>
    <div class="border-b-2 w-full p-3">See our work</div>
    <div class="border-b-2 w-full p-3">Our services</div>
    <div class="border-b-2 w-full p-3">Contact us</div>
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
