<template>
  <div class="text-center">
    <div class="relative hidden md:inline w-full">
      <img src="/img/home/corvette.jpg" class="h-auto w-full inline opacity-75" />
      <div class="absolute w-full mr-auto ml-auto bottom-14 text-7xl text-white font-sans z-10">
        We've got you covered.
      </div>
      <router-link to="/book-consultation"
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
          Book a consultation
        </button></router-link
      >
    </div>

    <div class="relative md:hidden w-full">
      <img src="/img/home/corvette_mobile.jpg" class="h-auto w-full opacity-90" />
      <div class="absolute w-full mr-auto ml-auto bottom-1/2 text-3xl text-white font-sans z-10">
        We've got you covered.
      </div>
      <router-link to="/book-consultation"
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
          Book a consultation
        </button></router-link
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 bg-black py-10">
      <div class="mt-auto mb-auto">
        <p class="font-coastal-body text-gray-100 text-3xl font-bold mb-3">Why Coastal Coating?</p>
        <p class="font-coastal-body text-gray-200 pt-2 px-4 text-left leading-relaxed">
          Coastal Coating protects those things that you’ve invested in (cars, boats, home, etc) and helps make cleaning
          them easier. Protecting them from the UV Rays, saltwater, and other environmental hazards. This means less
          time maintaining and more time ENJOYING these things in your life!<br /><br />
          Coastal Coating has been blessed to have a loyal client base and great relations with other local businesses
          in the area. In turn, we have been able to sponsor local non-profit clubs such as Myrtle Beach Corvette Club,
          Coastal Carolina Mustang Club, and Myrtle Beach Car Club.
        </p>
        <p class="ml-auto mr-auto my-8">
          <SocialIcons />
        </p>
      </div>

      <div>
        <img src="/img/home/coastal_coating_shop_front2.jpg" alt="Coastal Coating Shop Front" class="inline rounded" />
      </div>
    </div>

    <div class="grid grid-cols-1 bg-gray-50 py-3">
      <div>
        <p class="font-semibold text-4xl font-sans text-gray-700">
          0 to
          <span class="inline font-bold text-red-500 text-5xl">wow</span> in 1, 2, 3...
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 ml-auto mr-auto bg-gray-50 text-white pb-6">
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
    <div class="grid grid-cols-1 md:grid-cols-2 bg-black my-10">
      <div>
        <img
          src="/img/home/what_is_ceramic_coating.jpg"
          alt="What is ceramic coating?"
          class="inline rounded mb-4 mt-2"
        />
      </div>
      <div class="mt-auto mb-auto">
        <p class="font-coastal-body text-gray-100 text-3xl font-bold mb-3">What is ceramic coating?</p>
        <p class="font-coastal-body text-gray-200 pt-2 px-4 text-left leading-relaxed">
          In a couple years it has gone from market entry to mainstream, ceramic coating is the new normal for paint
          protection. Why waste time reapplying waxes and sealants weekly or monthly when you can have a 3, 5, or
          10-Year Ceramic Coating to protect your investment, make it easier to clean, and keep it looking amazing?<br /><br />

          <span class="font-bold text-lg">What's in it for me?</span><br />
          This means less time spent washing your vehicle. Protecting your investment for YEARS – After all, the first
          thing anyone bases value of a car, boat, etc. on is its appearance. You’ll have an unbeatable shine & gloss
          after every wash.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import siteAdminMixin from "../mixins/site/siteAdminMixin";
import SocialIcons from "./navigation/SocialIcons.vue";
export default {
  name: "Home",
  components: { SocialIcons },
  mixins: [siteAdminMixin],
  mounted() {
    this.setPageTitle(this.global.defaultPageTitle);
  },
};
</script>
