<template>
  <div class="relative bg-black w-full h-auto">
    <img
      src="../../assets/images/logo/coastal_coating_logo_small_transparent.png"
      class="transform scale-75"
    />

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
