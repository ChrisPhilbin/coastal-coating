<template>
  <div class="relative bg-black w-full h-auto md:pt-4">
    <router-link to="/">
      <img
        src="../../assets/images/logo/coastal_coating_logo_small_transparent.png"
        class="
          inline
          transform
          scale-50
          md:scale-75
          absolute
          md:relative md:left-0
          -left-8
        "
      />
    </router-link>
    
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
