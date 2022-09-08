<template>
  <div class="grid grid-cols-1 mb-8 mt-2 md:mx-8 md:w-3/4 md:mx-auto items-stretch">
    <div>
      <p class="w-full text-center text-3xl md:text-6xl text-white font-coastal-body font-bold">
        Convinced why we're the Grand Strand's leader in ceramic coating?<br /><br />Book a consultation now!
      </p>

      <p class="w-full text-center">
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
            Let's get started
          </button></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreYouReady",
};
</script>
