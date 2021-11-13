<template>
  <div class="relative bg-black w-full h-auto">
    <img
      src="../../assets/images/logo/coastal_coating_logo_small_transparent.png"
      class="inline transform scale-50 md:scale-75"
    />

    <DesktopLinks />

    <MobileLinks />
  </div>
</template>

<script>
import DesktopLinks from "./DesktopLinks.vue";
import MobileLinks from "./MobileLinks.vue";
export default {
  name: "TopNav",
  components: { DesktopLinks, MobileLinks },
  data() {
    return {
      showServicesMenu: false,
      showGalleryMenu: false,
    };
  },
};
</script>
