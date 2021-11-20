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
    <div class="col-span-1 md:col-span-2 w-auto">
      <p class="text-white font-bold text-3xl">{{ gallery.name }}</p>
      <p class="text-gray-300">{{ gallery.intro }}</p>
    </div>
    <div v-for="img in gallery.images" :key="img.id">
      <img :src="`${img.sm_url}`" />
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
          intro: "Chevy makes some of the most iconic sports cars - the Corvette and the Camaro.",
          leaderImage: "",
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
          intro: "",
          leaderImage: "",
          images: [],
        },
        nissan: {
          intro: "",
          leaderImage: "",
          images: [],
        },
        jeep: {
          intro: "",
          leaderImage: "",
          images: [],
        },
        bmw: {
          intro: "",
          leaderImage: "",
          images: [],
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
