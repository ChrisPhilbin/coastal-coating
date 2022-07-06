<template>
  <div class="text-center grid grid-cols-1 md:grid-cols-2">
    <div>
      <p class="block font-coastal-body text-3xl text-gray-200 font-bold pb-4">Contact Us</p>
      <p class="block text-lg font-coastal-body text-gray-300">
        {{ global.orgName }}<br />{{ global.contactInfo.address.street }}<br />{{ global.contactInfo.address.city }},
        {{ global.contactInfo.address.state }}
        {{ global.contactInfo.address.zip }}<br />
        <a :href="'tel:' + global.contactInfo.phone">{{ global.contactInfo.phone }}</a
        ><br />
        <a :href="'mailto:' + global.contactInfo.email">{{ global.contactInfo.email }}</a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2219.2429178363773!2d-79.00561156098338!3d33.691562986737765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89006ac4f5aa40e7%3A0x77d6326030207bc0!2s115%20Prather%20Park%20Dr%2C%20Myrtle%20Beach%2C%20SC%2029588!5e1!3m2!1sen!2sus!4v1638964840177!5m2!1sen!2sus"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        class="md:rounded-lg mt-12 w-full h-80 md:w-5/6 ml-auto mr-auto"
      ></iframe>
      <!-- <img
        src="/img/home/coastal_coating_shop_front.jpg"
        alt="Coastal Coating Shop Front"
        class="inline rounded pt-4"
      /> -->
    </div>
    <div class="mt-10 md:mt-2">
      <p class="block font-coastal-body text-3xl text-gray-200 font-bold pb-4">Have a question?</p>
      <p class="block text-lg font-coastal-body text-gray-300 mb-10 md:mb-4">
        Use the form below to get in contact with us.
      </p>
      <contact-us-form-vue></contact-us-form-vue>
    </div>
  </div>
</template>

<script>
import ContactUsFormVue from "./contact/ContactUsForm.vue";
export default {
  name: "ContactUs",
  components: {
    ContactUsFormVue,
  },
  mounted() {
    document.title = `${this.global.orgName} - Contact Us`;
  },
};
</script>
