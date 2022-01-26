<template>
  <div class="grid grid-cols-1 mt-3">
    <div class="relative">
      <img
        src="/img/landing/corvettes.jpg"
        class="w-full h-auto ml-auto mr-auto mb-8 opacity-80"
      />
      <p
        class="
          absolute
          text-center
          px-16
          w-full
          top-1/2
          left-1/2
          transform
          -translate-y-1/2 -translate-x-1/2
          text-3xl
          md:text-6xl
          text-white
          font-coastal-body font-bold
          z-10
        "
      >
        We are the Grand Strand's preferred ceramic coating professional.
      </p>
    </div>
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
