<template>
  <div
    class="
      text-white
      grid grid-cols-1
      md:mx-8 md:w-3/4 md:mx-auto
      items-stretch
      bg-gray-800
      md:p-4
      text-center
      md:rounded-tl md:rounded-tr
    "
  >
    <div>
      <p class="font-semibold text-4xl font-sans text-gray-50">
        0 to
        <span class="inline font-bold text-red-500 text-5xl">wow</span> in 1, 2, 3...
      </p>
    </div>
  </div>
  <div
    class="
      text-white
      grid grid-cols-1
      md:grid-cols-3
      gap-4
      mb-8
      pt-4
      md:mx-8 md:w-3/4 md:mx-auto
      items-stretch
      bg-gray-800
      md:p-4 md:rounded-bl md:rounded-br
    "
  >
    <div class="relative ml-auto mr-auto">
      <img class="rounded" src="/img/home/solstice_before.jpg" alt="Before paint correction" />
      <p class="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-4xl">
        BEFORE
      </p>
    </div>

    <div class="relative ml-auto mr-auto">
      <img class="rounded" src="/img/home/solstice_during.jpg" alt="During paint correction" />
      <p class="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-4xl">
        DURING
      </p>
    </div>

    <div class="relative ml-auto mr-auto">
      <img class="rounded" src="/img/home/solstice_after.jpg" alt="After paint correction" />
      <p class="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-4xl">
        AFTER
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeforeAfter",
};
</script>
