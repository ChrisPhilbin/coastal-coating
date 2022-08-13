<template>
  <div class="md:hidden absolute right-4 top-5 flex items-center z-10">
    <button class="outline-none mobile-menu-button">
      <svg
        @click="toggleMenu"
        class="w-10 h-10 text-blue-700"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div v-show="showMenu" class="md:hidden absolute left-10 top-24 bg-white z-50 w-10/12 rounded-md opacity-95">
      <router-link to="/" custom v-slot="{ navigate }">
        <div
          role="link"
          @click="
            toggleMenu();
            navigate();
          "
          class="border-b-2 w-full p-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="inline">Home</p>
        </div>
      </router-link>
      <router-link to="/book-consultation" custom v-slot="{ navigate }">
        <div
          role="link"
          @click="
            toggleMenu();
            navigate();
          "
          class="border-b-2 w-full p-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="inline font-bold">Book a consultation</p>
        </div>
      </router-link>
      <div class="w-full p-3" :class="[showServices ? '' : 'border-b-2']" @click="toggleServices">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline"
          :class="[
            showServices ? 'transform rotate-90 transition duration-300 text-blue-800' : 'transition duration-300',
          ]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          /></svg
        >Our services
      </div>
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="showServices" class="w-full pl-10">
          <router-link to="/services/ceramic-coating" custom v-slot="{ navigate }"
            ><span
              class="block pb-1.5"
              @click="
                toggleMenu();
                navigate();
              "
              >Ceramic Coating</span
            ></router-link
          >
          <span class="block pb-1.5">Wheel Coating</span>
          <span class="block pb-1.5">Window Coating</span>
          <router-link to="/services/interior-leather-coating" custom v-slot="{ navigate }"
            ><span
              class="block pb-1.5"
              @click="
                toggleMenu();
                navigate();
              "
              >Leather Coating</span
            ></router-link
          >
          <span class="block pb-1.5">Convertible Top Coating</span>
          <span class="block pb-1.5">Detailing</span>
          <span class="block pb-1.5">Ceramic Wax & Polish</span>
          <span class="block pb-1.5">Recreational Vehicles</span>
        </div>
      </transition>
      <div class="w-full p-3" :class="[showWork ? '' : 'border-b-2']" @click="toggleWork">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline"
          :class="[showWork ? 'transform rotate-90 transition duration-300 text-blue-800' : 'transition duration-300']"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          /></svg
        >See our work
      </div>
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="showWork" class="w-full pl-10">
          <router-link to="/gallery/bmw" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >BMW</span
            ></router-link
          >
          <router-link to="/gallery/chevrolet" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >Chevrolet</span
            ></router-link
          >
          <router-link to="/gallery/ford" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >Ford</span
            ></router-link
          >
          <router-link to="/gallery/gmc" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >GMC/Buick</span
            ></router-link
          >
          <router-link to="/gallery/jeep" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >Jeep</span
            ></router-link
          >
          <router-link to="/gallery/nissan" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >Nissan</span
            ></router-link
          >
          <router-link to="/gallery/subaru" custom v-slot="{ navigate }"
            ><span
              class="block pb-2"
              @click="
                toggleMenu();
                navigate();
              "
              >Subaru</span
            ></router-link
          >
        </div>
      </transition>
      <div class="border-b-2 w-full p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          /></svg
        ><router-link to="/about-us" custom v-slot="{ navigate }"
          ><span
            class="pb-2"
            @click="
              toggleMenu();
              navigate();
            "
            >About us</span
          ></router-link
        >
      </div>
      <div class="border-b-2 w-full p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          /></svg
        ><router-link to="/contact-us" custom v-slot="{ navigate }"
          ><span
            class="pb-2"
            @click="
              toggleMenu();
              navigate();
            "
            >Contact us</span
          ></router-link
        >
      </div>
      <div class="flex w-full p-3 relative">
        <SocialIcons />
      </div>
    </div>
  </transition>
</template>

<script>
import SocialIcons from "./SocialIcons.vue";
export default {
  name: "MobileLinks",
  components: { SocialIcons },
  data() {
    return {
      showMenu: false,
      showWork: false,
      showServices: false,
      mainDiv: null,
    };
  },
  mounted() {
    this.mainDiv = document.getElementById("main-content-div");
    this.mainDiv.addEventListener("click", () => {
      if (this.showMenu) {
        this.showMenu = !this.showMenu;
      }
    });
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleWork() {
      this.showWork = !this.showWork;
    },
    toggleServices() {
      this.showServices = !this.showServices;
    },
  },
};
</script>
