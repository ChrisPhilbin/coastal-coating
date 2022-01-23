<template>
  <div class="grid grid-cols-1">
    <div class="relative">
      <img
        src="/img/services/ceramic-coating/ceramic-coating-main.jpg"
        class="w-full h-auto ml-auto mr-auto mb-8 opacity-75"
      />
      <p
        class="
          absolute
          top-1/2
          left-32
          md:left-1/2
          transform
          -translate-y-1/2
          md:-translate-x-1/2
          text-2xl
          md:text-6xl
          text-white
          font-coastal-body font-bold
          z-10
        "
      >
        The Grand Strand's preferred ceramic coating professional.
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
