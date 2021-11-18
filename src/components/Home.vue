<template>
  <div class="text-center pt-20 md:pt-2">
    <div class="relative hidden md:inline w-full">
      <img
        src="/img/home/corvette.jpg"
        class="h-auto w-full inline opacity-75"
      />
      <div
        class="
          absolute
          w-full
          mr-auto
          ml-auto
          bottom-14
          text-7xl text-white
          font-sans
          z-10
        "
      >
        We've got you covered.
      </div>
      <router-link to="/quote"
        ><button
          class="
            absolute
            top-48
            left-1/2
            transform
            -translate-x-1/2 -translate-y-48
            h-16
            w-52
            rounded-lg
            bg-blue-400
            text-white
            font-semibold
            text-lg
            z-10
          "
        >
          Book appointment
        </button></router-link
      >
    </div>

    <div class="relative md:hidden w-full">
      <img
        src="/img/home/corvette_mobile.jpg"
        class="h-auto w-full opacity-75"
      />
      <div
        class="
          absolute
          w-full
          mr-auto
          ml-auto
          bottom-1/2
          text-3xl text-white
          font-sans
          z-10
        "
      >
        We've got you covered.
      </div>
      <!-- <button class="absolute left-20 bottom-6 h-16 w-52 rounded-lg bg-blue-400 text-white font-semibold text-lg z-10">Book appointment</button> -->
      <router-link to="/quote"
        ><button
          class="
            absolute
            bottom-5
            left-1/2
            transform
            -translate-x-1/2 -translate-y-5
            h-16
            w-52
            rounded-lg
            bg-blue-400
            text-white
            font-semibold
            text-lg
            z-10
          "
        >
          Book appointment
        </button></router-link
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-6">
      <div>
        <p class="text-white text-3xl font-bold">Why Coastal Coating?</p>
      </div>

      <div></div>
    </div>

    <div class="grid grid-cols-1 gap-1 bg-black text-white py-8">
      <div>
        <p class="font-semibold text-3xl font-sans">
          0 to #WOW in 1... 2... 3...
        </p>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        gap-4
        md:grid-cols-3
        ml-auto
        mr-auto
        bg-black
        text-white
        pb-10
      "
    >
      <div class="relative ml-auto mr-auto">
        <img
          class="rounded"
          src="/img/home/solstice_before.jpg"
          alt="Before paint correction"
        />
        <p
          class="
            absolute
            bottom-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            z-10
            font-bold
            text-4xl
          "
        >
          #before
        </p>
      </div>

      <div class="relative ml-auto mr-auto">
        <img
          class="rounded"
          src="/img/home/solstice_during.jpg"
          alt="During paint correction"
        />
        <p
          class="
            absolute
            bottom-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            z-10
            font-bold
            text-4xl
          "
        >
          #during
        </p>
      </div>

      <div class="relative ml-auto mr-auto">
        <img
          class="rounded"
          src="/img/home/solstice_after.jpg"
          alt="After paint correction"
        />
        <p
          class="
            absolute
            bottom-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            z-10
            font-bold
            text-4xl
          "
        >
          #after
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
