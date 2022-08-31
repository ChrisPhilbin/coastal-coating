<template>
  <CallToAction />

  <ImageSlider />

  <SocialReviews />
</template>

<script>
import CallToAction from "./sections/CallToAction.vue";
import ImageSlider from "./sections/ImageSlider.vue";
import SocialReviews from "./sections/SocialReviews.vue";

export default {
  name: "LandingPage",
  components: { CallToAction, ImageSlider, SocialReviews },
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("campaignSource", this.$route.params.campaignSource);
  },
};
</script>
