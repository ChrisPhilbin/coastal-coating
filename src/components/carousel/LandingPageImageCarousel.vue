<template>
  <div class="md:w-3/4 md:mx-auto mb-8">
    <vueper-slides autoplay :slide-ratio="325 / 450" :duration="6000">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content"> </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "LandingPageImageCarousel",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        content: `<img src="/img/cars/gallery/bmw/sm/4_series_sm.jpg" />`,
      },
      {
        content: `<img src="/img/cars/gallery/bmw/sm/m4_side_sm.jpg" />`,
      },
      {
        content: `<img src="/img/cars/gallery/chevrolet/sm/silverado_sm.jpg" />`,
      },
      {
        content: `<img src="/img/cars/gallery/gmc_buick/sm/terrain_sm.jpg" />`,
      },
      {
        content: `<img src="/img/cars/gallery/gmc_buick/sm/yukon_sm.jpg" />`,
      },
    ],
  }),
};
</script>
