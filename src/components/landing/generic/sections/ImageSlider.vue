<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      gap-4
      mb-8
      mt-2
      md:mx-8 md:w-3/4 md:mx-auto
      items-stretch
      bg-gray-800
      md:rounded md:p-4
    "
  >
    <div class="text-center my-auto mt-4">
      <p class="w-full text-center text-2xl md:text-4xl text-white font-coastal-body font-bold">
        A picture is worth a thousand words - Check out some of our happy customers' vehicles we've coated 👀
      </p>
    </div>

    <div class="text-center md:mt-10">
      <LandingPageCarousel displaySlides="landingPageImages" />
    </div>
  </div>
</template>

<script>
import LandingPageCarousel from "../../../carousel/LandingPageCarousel.vue";
export default {
  name: "ImageSlider",
  components: { LandingPageCarousel },
};
</script>
