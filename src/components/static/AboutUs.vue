<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 mb-4">
    <div class="px-2 py-3">
      <p class="text-gray-200 text-3xl font-coastal-body font-bold">
        About {{ global.orgName }}
      </p>
      <p class="text-gray-200 mt-3 font-coastal-body leading-relaxed">
        Coastal Coating started with one goal in mind – To bring the Grand
        Strand affordable, high quality ceramic coatings to protect our cars,
        boats, RVs, motorcycles, and more from the harsh elements of our area
        and beach life.<br /><br />
        Coating opened in March 2019 and has currently protected over 250
        vehicles in our area. We have grown to a team of 4 dedicated ceramic
        coating specialists who live and breath cars. We are trusted by multiple
        dealerships and businesses in the Grand Strand as well as sponsor 3
        local non-profit organizations: Myrtle Beach Car Club, Myrtle Beach
        Corvette Club, and Coastal Carolina Mustang Club.
      </p>
    </div>
    <div class="text-center px-2 py-3">
      <img
        src="/img/about/about_us.webp"
        class="w-max"
        alt="About Coastal Coating"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {};
  },
  mounted() {
    document.title = `${this.global.orgName} - About Us`;
  },
};
</script>
