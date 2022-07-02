<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      gap-4
      relative
      mb-8
      mt-2
      mx-2
      md:mx-8
    "
  >
    <div>
      <img src="/img/landing/corvettes.jpg" class="w-auto h-full mx-auto" />
    </div>

    <div class="p-4 text-center">
      <p
        class="
          w-full
          text-center text-3xl
          md:text-6xl
          text-white
          font-coastal-body font-bold
        "
      >
        We are the Grand Strand's preferred ceramic coating professional.
      </p>

      <router-link to="/book-consultation"
        ><button
          class="
            relative
            mt-12
            md:mt-20
            h-16
            w-52
            md:h-20 md:w-72
            rounded-lg
            bg-blue-700
            text-white
            font-semibold
            text-lg
            md:text-xl
          "
        >
          Book a consultation
        </button></router-link
      >
    </div>

    <div class="text-center"></div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("campaignSource", this.$route.params.campaignSource);
  },
};
</script>
