<template>
  <div class="text-center">
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
            bg-blue-700
            text-white
            font-semibold
            text-lg
            z-10
          "
        >
          Book an appointment
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
            bg-blue-700
            text-white
            font-semibold
            text-lg
            z-10
          "
        >
          Book an appointment
        </button></router-link
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 bg-black pt-6 pb-0 md:pb-3">
      <div class="mt-auto mb-auto">
        <p class="text-gray-100 text-3xl font-bold mb-5">
          Why Coastal Coating?
        </p>
        <p class="text-gray-200 pt-2 px-4 text-left">
          Coastal Coating protects those things that you’ve invested in (cars,
          boats, home, etc) and helps make cleaning them easier. Protecting them
          from the UV Rays, saltwater, and other environmental hazards. This
          means less time maintaining and more time ENJOYING these things in
          your life!<br /><br />
          Coastal Coating has been blessed to have a loyal client base and great
          relations with other local businesses in the area. In turn, we have
          been able to sponsor local non-profit clubs such as Myrtle Beach
          Corvette Club, Coastal Carolina Mustang Club, and Myrtle Beach Car
          Club.
        </p>
        <p class="pt-2 ml-auto mr-auto mt-8 pb-3">
          <img
            src="../assets/images/social-icons/facebook_small.png"
            class="inline ml-4 mr-4"
          />
          <img
            src="../assets/images/social-icons/instagram_small.png"
            class="inline"
          />
        </p>
      </div>

      <div class="mt-auto mb-auto">
        <img
          src="/img/home/coastal_coating_shop_front.jpg"
          alt="Coastal Coating Shop Front"
          class="inline rounded"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-1 bg-gray-50 py-6">
      <div>
        <p class="font-semibold text-4xl font-sans text-gray-700">
          0 to
          <span class="inline font-bold text-red-500 text-5xl">wow</span> in 1,
          2, 3...
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
        bg-gray-50
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
          BEFORE
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
          DURING
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
          AFTER
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 bg-black py-6">
      <div></div>
      <div>
        <p class="text-gray-100 text-3xl font-bold">What is ceramic coating?</p>
        <p class="text-gray-200 pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
