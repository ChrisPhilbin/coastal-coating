<template>
  <div v-if="errors">
    <p class="text-red-500">Not found!</p>
  </div>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      gap-2
      md:gap-8
      ml-auto
      mr-auto
      justify-items-center
      max-w-auto
      md:w-3/4
    "
  >
    <div class="px-2">
      <p class="text-white font-bold text-3xl">{{ gallery.name }}</p>
      <p class="text-gray-300" v-html="gallery.intro"></p>
    </div>
    <div>
      <img :src="`${gallery.leaderImage}`" class="rounded" />
    </div>
    <div v-for="img in gallery.images" :key="img.id">
      <img :src="`${img.sm_url}`" class="rounded" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      errors: false,
      galleries: {
        chevrolet: {
          name: "Chevrolet",
          intro:
            '<p class="pb-3">Chevy makes some of the most iconic sports cars in American history but also produces some great sedans and SUVs that are seen all over the roads.</p><p>Whether you have the latest C8 Corvette, a Suburban to take long family roadtrips, or an iconic 1963 split-window Sting Ray, protecting your Chevy from the harsh elements should be of top concern.</p>',
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
          intro: "The automaker that started it all: Ford.",
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
  mounted() {
    console.log(this.$route.params);
  },
  methods: {
    setErrors() {
      this.errors = true;
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
