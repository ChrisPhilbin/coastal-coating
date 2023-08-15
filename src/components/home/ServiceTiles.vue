<style scoped>
.flip-content {
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

.flip-content:hover .flip-content {
  transform: rotateY(180deg);
  transition: transform 0.3s;
}

.flip-front,
.flip-back {
  backface-visibility: hidden;
}

.flip-back {
  transform: rotateY(180deg);
}
</style>

<template>
  <div class="grid gap-0 grid-cols-1 md:grid-cols-3">
    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/ceramic_coating.jpeg')"
    >
      <div class="flip-content h-full">
        <div class="flip-front flex items-center bg-service-tile-front justify-center h-full cursor-pointer">
          <div class="basis-full">
            <p class="block text-2xl text-white font-bold opacity-100">CERAMIC COATING</p>
          </div>
        </div>
        <div class="flip-back flex items-center bg-service-tile-back justify-center h-full cursor-pointer">
          <div class="basis-full">
            <p class="block text-2xl text-white font-bold opacity-100">CERAMIC COATING</p>
            <button class="bg-gray-800 text-white p-3 mt-3">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/marine.jpg')"
    >
      <div
        class="flex items-center bg-service-tile-front hover:bg-service-tile-back justify-center h-full cursor-pointer"
      >
        <div class="basis-full">
          <p class="block text-2xl text-white font-bold opacity-100">MARINE</p>
          <button class="bg-gray-800 text-white p-3 mt-3">LEARN MORE</button>
        </div>
      </div>
    </div>

    <div class="h-96 p-8 bg-center bg-no-repeat bg-cover" style="background-image: url('/img/services/tiles/rv.jpg')">
      <div
        class="flex items-center bg-service-tile-front hover:bg-service-tile-back justify-center h-full cursor-pointer"
      >
        <div class="basis-full">
          <p class="block text-2xl text-white font-bold opacity-100">RV</p>
          <button class="bg-gray-800 text-white p-3 mt-3">LEARN MORE</button>
        </div>
      </div>
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
