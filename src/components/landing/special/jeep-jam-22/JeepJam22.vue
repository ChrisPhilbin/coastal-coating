<template>
  <JeepJam22CallToAction />

  <ImageSlider />

  <SocialReviews />

  <BeforeAfter />

  <AreYouReady />
</template>

<script>
import AreYouReady from "../../generic/sections/AreYouReady.vue";
import BeforeAfter from "../../generic/sections/BeforeAfter.vue";
import ImageSlider from "../../generic/sections/ImageSlider.vue";
import JeepJam22CallToAction from "./sections/JeepJam22CallToAction.vue";
import SocialReviews from "../../generic/sections/SocialReviews.vue";

export default {
  name: "JeepJam22",
  components: { JeepJam22CallToAction, SocialReviews, AreYouReady, BeforeAfter, ImageSlider },
  data() {
    return {};
  },
};
</script>
