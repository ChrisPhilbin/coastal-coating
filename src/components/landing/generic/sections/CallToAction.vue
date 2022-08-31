<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-2 md:mx-8 md:w-3/4 md:mx-auto items-stretch">
    <div>
      <img src="/img/landing/corvettes.jpg" class="mx-auto rounded" />
    </div>

    <div class="px-4 text-center mt-auto mb-auto">
      <p class="w-full text-center text-3xl md:text-6xl text-white font-coastal-body font-bold">
        We are the Grand Strand's Leader in Ceramic Coating.
      </p>

      <router-link to="/book-consultation"
        ><button
          class="
            relative
            mt-8
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
  </div>
</template>

<script>
export default {
  name: "CallToAction",
};
</script>
