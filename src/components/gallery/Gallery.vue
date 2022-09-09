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
import GalleryModalVue from "./modal/GalleryModal.vue";
export default {
  name: "Gallery",
  components: {
    GalleryModalVue,
  },
  mixins: [siteAdminMixin],
  data() {
    return {
      selectedImage: {},
      isModalVisible: false,
      errors: false,
      viewPortWidth: window.innerWidth,
      galleries: {
        chevrolet: {
          name: "Chevrolet",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/chevrolet/lg/corvette_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/corvette_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/chevrolet/lg/camaro_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/chevrolet/lg/silverado_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/silverado_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/chevrolet/lg/tahoe_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/tahoe_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/chevrolet/lg/corvette_2_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/corvette_2_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/chevrolet/lg/corvette_3_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/corvette_3_sm.jpg",
            },
            {
              id: 7,
              lg_url: "/img/cars/gallery/chevrolet/lg/traverse_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/traverse_sm.jpg",
            },
            {
              id: 8,
              lg_url: "/img/cars/gallery/chevrolet/lg/corvette_4_lg.jpg",
              sm_url: "/img/cars/gallery/chevrolet/sm/corvette_4_sm.jpg",
            },
          ],
        },
        gmc: {
          name: "GMC / Buick",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/gmc_buick/lg/yukon_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/yukon_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/gmc_buick/lg/sierra_3_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/sierra_3_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/gmc_buick/lg/terrain_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/terrain_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/gmc_buick/lg/yukon_2_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/yukon_2_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/gmc_buick/lg/sierra_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/sierra_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/gmc_buick/lg/sierra_2_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/sierra_2_sm.jpg",
            },
            {
              id: 7,
              lg_url: "/img/cars/gallery/gmc_buick/lg/encore_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/encore_sm.jpg",
            },
            {
              id: 8,
              lg_url: "/img/cars/gallery/gmc_buick/lg/sierra_4_lg.jpg",
              sm_url: "/img/cars/gallery/gmc_buick/sm/sierra_4_sm.jpg",
            },
          ],
        },
        ford: {
          name: "Ford / Lincoln",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/bronco_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/bronco_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/f250_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/f250_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/expedition_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/expedition_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/ltd_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/ltd_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/f150_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/f150_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/ltd_2_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/ltd_2_sm.jpg",
            },
            {
              id: 7,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/navigator_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/navigator_sm.jpg",
            },
            {
              id: 8,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/town_car_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/town_car_sm.jpg",
            },
            {
              id: 9,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/raptor_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/raptor_sm.jpg",
            },
            {
              id: 10,
              lg_url: "/img/cars/gallery/ford_lincoln/lg/st_lg.jpg",
              sm_url: "/img/cars/gallery/ford_lincoln/sm/st_sm.jpg",
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
              lg_url: "/img/cars/gallery/jeep/lg/wrangler_1_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/wrangler_1_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/jeep/lg/cherokee_1_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/cherokee_1_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/jeep/lg/gladiator_1_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/gladiator_1_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/jeep/lg/wrangler_2_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/wrangler_2_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/jeep/lg/wrangler_3_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/wrangler_3_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/jeep/lg/cherokee_2_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/cherokee_2_sm.jpg",
            },
            {
              id: 7,
              lg_url: "/img/cars/gallery/jeep/lg/gladiator_2_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/gladiator_2_sm.jpg",
            },
            {
              id: 8,
              lg_url: "/img/cars/gallery/jeep/lg/wrangler_4_lg.jpg",
              sm_url: "/img/cars/gallery/jeep/sm/wrangler_4_sm.jpg",
            },
          ],
        },
        bmw: {
          name: "BMW",
          intro: "",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/bmw/lg/m6_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/m6_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/bmw/lg/m4_side_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/m4_side_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/bmw/lg/x6_side_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/x6_side_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/bmw/lg/4_series_2_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/4_series_2_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/bmw/lg/4_series_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/4_series_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/bmw/lg/m4_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/m4_sm.jpg",
            },
            {
              id: 7,
              lg_url: "/img/cars/gallery/bmw/lg/x3_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/x3_sm.jpg",
            },
            {
              id: 8,
              lg_url: "/img/cars/gallery/bmw/lg/x6_lg.jpg",
              sm_url: "/img/cars/gallery/bmw/sm/x6_sm.jpg",
            },
          ],
        },
        hyundai: {
          name: "Hyundai & Genesis",
          intro: "",
          leaderImage: "",
          images: [
            {
              id: 1,
              lg_url: "/img/cars/gallery/hyundai/lg/genesis_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/genesis_sm.jpg",
            },
            {
              id: 2,
              lg_url: "/img/cars/gallery/hyundai/lg/hyundai_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/hyundai_sm.jpg",
            },
            {
              id: 3,
              lg_url: "/img/cars/gallery/hyundai/lg/hyundai_2_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/hyundai_2_sm.jpg",
            },
            {
              id: 4,
              lg_url: "/img/cars/gallery/hyundai/lg/genesis_4_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/genesis_4_sm.jpg",
            },
            {
              id: 5,
              lg_url: "/img/cars/gallery/hyundai/lg/genesis_3_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/genesis_3_sm.jpg",
            },
            {
              id: 6,
              lg_url: "/img/cars/gallery/hyundai/lg/genesis_2_lg.jpg",
              sm_url: "/img/cars/gallery/hyundai/sm/genesis_2_sm.jpg",
            },
          ],
        },
      },
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
