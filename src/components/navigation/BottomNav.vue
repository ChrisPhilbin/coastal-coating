<template>
  <div class="text-center bg-gray-800 py-4 w-full h-auto md:pt-4">
    <p class="text-gray-300">
      {{
        global.contactInfo.address.street +
        " " +
        global.contactInfo.address.city +
        " " +
        global.contactInfo.address.state +
        " " +
        global.contactInfo.address.zip
      }}
      <br />{{ global.contactInfo.phone }}
    </p>
    <p class="py-2">
      <SocialIcons />
    </p>
    <p class="text-gray-300">
      &copy; {{ new Date().getFullYear() }} {{ global.orgName }}
    </p>
  </div>
</template>

<script>
import SocialIcons from "./SocialIcons.vue";
export default {
  name: "BottomNav",
  components: { SocialIcons },
};
</script>
