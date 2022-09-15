<template>
  <div v-if="errors">
    <p class="text-red-500">Not found!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 ml-auto mr-auto max-w-auto md:w-3/4 mb-10" id="gallery">
    <div class="md:col-span-2 mb-4 md:pl-20 pl-5">
      <p class="text-white font-bold text-4xl text-justify">{{ gallery.name }}</p>
    </div>
    <div v-if="gallery.leaderImage" class="ml-auto mr-auto">
      <img :src="`${gallery.leaderImage}`" class="rounded" />
    </div>
    <div v-for="img in gallery.images" :key="img.id" class="ml-auto mr-auto">
      <img :src="`${img.sm_url}`" class="rounded" @click="showModal(img)" />
    </div>
  </div>
  <gallery-modal-vue v-show="isModalVisible" @close="closeModal">
    <template v-if="selectedImage.title" v-slot:header> {{ selectedImage.title }} </template>

    <template v-slot:body>
      <img :src="`${selectedImage.lg_url}`" />
    </template>

    <template v-if="selectedImage.footer" v-slot:footer> {{ selectedImage.footer }} </template>
  </gallery-modal-vue>
</template>

<script>
import siteAdminMixin from "../../mixins/site/siteAdminMixin";
import imageGalleryMixin from "../../mixins/site/imageGalleryMixin";
import GalleryModalVue from "./modal/GalleryModal.vue";
export default {
  name: "Gallery",
  components: {
    GalleryModalVue,
  },
  mixins: [siteAdminMixin, imageGalleryMixin],
  data() {
    return {
      selectedImage: {},
      isModalVisible: false,
      errors: false,
      viewPortWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.viewPortWidth = window.innerWidth;
    });
    this.setPageTitle(this.global.defaultPageTitle);
  },
  methods: {
    setErrors() {
      this.errors = true;
      this.$router.push("/404");
    },
    showModal(image) {
      if (image.lg_url && this.viewPortWidth >= 600) {
        this.selectedImage = image;
        this.isModalVisible = true;
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    gallery() {
      switch (this.$route.params.make) {
        case "chevrolet":
          return this.galleries.chevrolet;
        case "ford":
          return this.galleries.ford;
        case "nissan":
          return this.galleries.nissan;
        case "jeep":
          return this.galleries.jeep;
        case "bmw":
          return this.galleries.bmw;
        case "gmc":
          return this.galleries.gmc;
        case "hyundai":
          return this.galleries.hyundai;
        default:
          this.setErrors();
          return this.errors;
      }
    },
  },
};
</script>
