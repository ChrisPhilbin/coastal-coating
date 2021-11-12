<template>
  <div class="relative bg-black w-full h-auto">
    <img
      src="../../assets/images/logo/coastal_coating_logo_small_transparent.png"
      class="inline transform scale-50 md:scale-75"
    />

    <div class="hidden md:inline">
      <a href="#" class="inline font-bold text-white px-4 font-sans md:hover:underline">Get a quote</a>
      <a href="#" class="inline font-bold text-white px-4 font-sans md:hover:underline">See our work</a>
      <a href="#" class="inline font-bold text-white px-4 font-sans md:hover:underline">Services</a>
      <a href="#" class="inline font-bold text-white px-4 font-sans md:hover:underline">Contact us</a>

      <button class="absolute right-8 top-4 bg-green-200 p-2 rounded-md">Get a quote</button>
    </div>
    <div class="md:hidden absolute right-4 top-5 flex items-center">
      <button class="outline-none mobile-menu-button">
        <svg
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
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>
