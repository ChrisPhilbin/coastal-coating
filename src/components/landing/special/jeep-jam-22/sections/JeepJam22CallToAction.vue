<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-2 md:mx-8 md:w-3/4 md:mx-auto items-stretch">
    <div>
      <img src="/img/cars/gallery/jeep/lg/wrangler_3_lg.jpg" class="mx-auto rounded" />
    </div>

    <div class="px-4 text-center mt-auto mb-auto">
      <p
        class="
          w-full
          inline-block
          text-center text-3xl
          md:text-6xl
          text-coastal-light-blue
          font-coastal-montserrat font-semibold
          mb-6
        "
      >
        Get your rig ready for Jeep Jam 2022!
      </p>

      <p
        class="
          w-full
          inline-block
          text-center text-3xl
          md:text-3xl
          text-coastal-light-blue
          font-coastal-montserrat font-semibold
          mt-8
        "
      >
        Jeep Jam kicks off in
      </p>
      <EventCountDown countDownToDate="Oct 28, 2022 00:00:00" />

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
            bg-coastal-dark-blue
            text-white
            font-semibold
            text-lg
            md:text-xl
          "
        >
          Let's get ready!
        </button></router-link
      >
    </div>
  </div>
  <div class="md:hidden grid grid-cols-1 text-center">
    <video autoplay muted loop class="object-cover">
      <source src="/videos/special/jeep_jam_22.mov" type="video/webm" />
    </video>
  </div>
</template>

<script>
import EventCountDown from "../../../generic/sections/eventCountDown.vue";
export default {
  name: "JeepJam22CallToAction",
  components: { EventCountDown },
};
</script>
