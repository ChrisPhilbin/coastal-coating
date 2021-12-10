<template>
  <div class="text-center bg-gray-800 py-4 mt-3 w-full h-auto md:pt-4">
    <p class="text-gray-300">
      115-C Prather Park Dr., Myrtle Beach, SC 29588<br />(843) 999-2636
    </p>
    <p class="py-2">
      <SocialIcons />
    </p>
    <p class="text-gray-300">&copy; 2021 Coastal Coating</p>
  </div>
</template>

<script>
import SocialIcons from "./SocialIcons.vue";
export default {
  name: "BottomNav",
  components: { SocialIcons },
};
</script>
