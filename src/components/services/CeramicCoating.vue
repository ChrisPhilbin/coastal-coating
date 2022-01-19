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
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
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
    <div class="ml-auto mr-auto w-3/4">
      <p
        class="
          text-gray-200 text-3xl
          md:text-6xl
          font-coastal-body font-bold
          mb-6
          text-center
        "
      >
        Ceramic Coating
      </p>
      <p class="text-gray-200 font-coastal-body leading-relaxed mb-14">
        A ceramic coating is a semi-permanent protective coating applied to
        paint, metal, plastics, glass and other surfaces. It bonds to whatever
        it is applied to, rather than sitting on top of it like a wax or sealant
        does. The ceramic coating seals all your surfaces preventing it from
        fading, oxidizing, weathering or even worse – clear coat failure or
        rust. You’ll discover why everyone loves ceramic coating the first time
        you wash your vehicle. Washing will only take you half the time that it
        normally does thanks to its hydrophobic properties (repelling water,
        dirt, oil, grease.)
      </p>
      <router-link to="/book-consultation"
        ><button
          class="
            block
            ml-auto
            mr-auto
            mb-14
            h-16
            w-52
            rounded-lg
            bg-blue-700
            text-white
            font-semibold
            text-lg
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
  name: "Ceramic Coating",
  data() {
    return {};
  },
};
</script>
