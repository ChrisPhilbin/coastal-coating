<style scoped>
.flip {
  perspective: 800px;
}
.flip-content {
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip:hover .flip-content {
  transform: rotateY(180deg);
  transition: transform 0.5s;
}

.flip-front,
.flip-back {
  position: absolute;
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
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">CERAMIC COATING</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">CERAMIC COATING</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/marine.jpg')"
    >
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">MARINE</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">MARINE</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-96 p-8 bg-center bg-no-repeat bg-cover" style="background-image: url('/img/services/tiles/rv.jpg')">
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">RV</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">RV</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/detailing.jpg')"
    >
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">DETAILING</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">DETAILING</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/paint_correction.jpg')"
    >
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">PAINT CORRECTION</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">PAINT CORRECTION</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-96 p-8 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/img/services/tiles/window_tinting.jpg')"
    >
      <div class="flip h-full w-full">
        <div class="flip-content h-full w-full">
          <div class="flip-front h-full bg-service-tile-front w-full flex items-center justify-center">
            <p class="block text-2xl text-white font-bold font-coastal-body">WINDOW TINTING</p>
          </div>

          <div class="flip-back h-full bg-service-tile-back w-full flex items-center justify-center cursor-pointer">
            <div>
              <p class="block text-2xl text-white font-bold font-coastal-body">WINDOW TINTING</p>
              <button class="bg-gray-800 text-white p-3 mt-3 font-coastal-body">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
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
