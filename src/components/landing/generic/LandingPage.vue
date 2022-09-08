<template>
  <CallToAction />

  <ImageSlider />

  <SocialReviews />

  <BeforeAfter />

  <AreYouReady />
</template>

<script>
import CallToAction from "./sections/CallToAction.vue";
import ImageSlider from "./sections/ImageSlider.vue";
import SocialReviews from "./sections/SocialReviews.vue";
import BeforeAfter from "./sections/BeforeAfter.vue";
import AreYouReady from "./sections/AreYouReady.vue";

export default {
  name: "LandingPage",
  components: { CallToAction, ImageSlider, SocialReviews, BeforeAfter, AreYouReady },
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("campaignSource", this.$route.params.campaignSource);
  },
};
</script>
