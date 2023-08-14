<template>
  <div class="grid gap-0 grid-cols-1 md:grid-cols-3">
    <div
      class="bg-red-200 h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/ceramic_coating.jpeg')"
    >
      <div
        class="flex items-center justify-center h-full cursor-pointer"
        style="background-color: rgb(216, 180, 254, 0.4)"
      >
        <p class="text-xl text-white font-bold opacity-100">CERAMIC COATING</p>
      </div>
    </div>

    <div
      class="bg-red-200 h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/marine.jpg')"
    >
      <div class="h-full bg-purple-300 opacity-40"></div>
    </div>

    <div
      class="bg-red-200 h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/rv.jpg')"
    >
      <div class="h-full bg-purple-300 opacity-40"></div>
    </div>

    <div class="bg-green-200 h-min p-8">
      <div class="bg-red-700 h-16"></div>
    </div>

    <div class="bg-blue-200 h-min p-8">
      <div class="bg-red-700 h-16"></div>
    </div>

    <div class="bg-red-200 h-min p-8">
      <div class="bg-red-700 h-16"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTiles",
  data() {
    return {};
  },
};
</script>
