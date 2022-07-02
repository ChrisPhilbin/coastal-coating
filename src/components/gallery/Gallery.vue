<template>
  <div v-if="errors">
    <p class="text-red-500">Not found!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 ml-auto mr-auto max-w-auto md:w-3/4 mb-10">
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
import GalleryModalVue from "./modal/GalleryModal.vue";

export default {
  name: "Gallery",
  components: {
    GalleryModalVue,
  },
  data() {
    return {
      selectedImage: {},
      isModalVisible: false,
      errors: false,
      galleries: {
        chevrolet: {
          name: "Chevrolet",
          leaderImage: "/img/cars/gallery/chevrolet/corvette_sm.jpg",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/chevrolet/blazer_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/blazer_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/chevrolet/suburban_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/suburban_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/chevrolet/camaro_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/camaro_sm.jpg",
            },
          ],
        },
        ford: {
          name: "Ford",
          leaderImage: "/img/cars/gallery/ford/mach1_mustang_sm.jpg",
          images: [
            {
              id: 1,
              lg_url: "",
              sm_url: "/img/cars/gallery/ford/f150_sm.jpg",
            },
            {
              id: 2,
              lg_url: "",
              sm_url: "/img/cars/gallery/ford/f450_sm.jpg",
            },
          ],
        },
        nissan: {
          name: "Nissan",
          intro: "",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "",
              sm_url: "/img/cars/gallery/nissan/altima_sm.jpg",
            },
            {
              id: 2,
              lg_url: "",
              sm_url: "/img/cars/gallery/nissan/titan_sm.jpg",
            },
            {
              id: 3,
              lg_url: "",
              sm_url: "/img/cars/gallery/nissan/maxima_sm.jpg",
            },
            {
              id: 4,
              lg_url: "",
              sm_url: "/img/cars/gallery/nissan/370z_sm.jpg",
            },
            {
              id: 5,
              lg_url: "",
              sm_url: "/img/cars/gallery/nissan/murano_sm.jpg",
            },
          ],
        },
        jeep: {
          intro: "",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "",
              sm_url: "/img/cars/gallery/jeep/wrangler_sm.jpg",
            },
            {
              id: 2,
              lg_url: "",
              sm_url: "/img/cars/gallery/jeep/trackhawk_sm.jpg",
            },
            {
              id: 3,
              lg_url: "",
              sm_url: "/img/cars/gallery/jeep/trailhawk_sm.jpg",
            },
            {
              id: 4,
              lg_url: "",
              sm_url: "/img/cars/gallery/jeep/gladiator_sm.jpg",
            },
            {
              id: 5,
              lg_url: "",
              sm_url: "/img/cars/gallery/jeep/wrangler_sport_sm.jpg",
            },
          ],
        },
        bmw: {
          intro: "",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "",
              sm_url: "/img/cars/gallery/bmw/x6_sm.jpg",
            },
            {
              id: 2,
              lg_url: "",
              sm_url: "/img/cars/gallery/bmw/m240i_sm.jpg",
            },
            {
              id: 3,
              lg_url: "",
              sm_url: "/img/cars/gallery/bmw/3_series_sm.jpg",
            },
          ],
        },
      },
    };
  },
  mounted() {},
  methods: {
    setErrors() {
      this.errors = true;
      this.$router.push("/404");
    },
    showModal(image) {
      if (image.lg_url) {
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
        default:
          this.setErrors();
          return this.errors;
      }
    },
  },
};
</script>
