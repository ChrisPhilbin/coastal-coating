<template>
  <router-link to="/book-consultation">
    <button
      class="
        absolute
        hidden
        md:hidden
        lg:inline
        right-8
        top-10
        bg-blue-800
        p-2
        rounded-md
        text-white
        font-bold
        transition
        ease-in
        duration-700
        transform
        hover:scale-110
      "
    >
      Book a consultation
    </button>
  </router-link>

  <Menu as="div" class="relative hidden md:inline-block text-left">
    <div>
      <MenuButton
        class="
          inline-flex
          justify-center
          w-full
          px-4
          py-2
          text-white
          font-bold
          md:hover:underline
          bg-black
          rounded-md
          bg-opacity-20
          hover:bg-opacity-30
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-opacity-75
        "
      >
        See our work
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
          absolute
          right-0
          w-40
          mt-2
          origin-top-right
          bg-white
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          z-50
        "
      >
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/bmw">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex rounded-tl-md rounded-tr-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                BMW
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/buick">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Buick
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/chevrolet">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Chevrolet
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/ford">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Ford
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/gmc">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                GMC
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/jeep">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Jeep
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/nissan">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Nissan
              </button>
            </router-link>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/gallery/subaru">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex rounded-bl-md rounded-br-md flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Subaru
              </button>
            </router-link>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <Menu as="div" class="relative hidden md:inline-block text-left">
    <div>
      <MenuButton
        class="
          inline-flex
          justify-center
          w-full
          px-4
          py-2
          text-white
          font-bold
          md:hover:underline
          bg-black
          rounded-md
          bg-opacity-20
          hover:bg-opacity-30
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-opacity-75
        "
      >
        Our services
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
          absolute
          right-0
          w-52
          mt-2
          origin-top-right
          bg-white
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          z-50
        "
      >
        <div>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/ceramic-coating">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex rounded-tl-md rounded-tr-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Ceramic Coating
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/wheel-coating">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Wheel Coating
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/window-coating">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Window Coating
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/interor-leather-coating">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Leather Coating
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/convertible-top-coating">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Convertible Top Coating
              </button>
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Detailing
            </button>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Ceramic Wax & Polish
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link to="/services/recreational-vehicles">
              <button
                :class="[
                  active ? 'bg-green-200 text-black' : 'text-gray-900',
                  'group flex rounded-bl-md rounded-br-md  items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Recreational Vehicles
              </button>
            </router-link>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <div class="relative hidden md:inline-block text-left">
    <div class="relative hidden md:inline-block text-left">
      <router-link to="/about-us">
        <div
          class="
            inline-flex
            justify-center
            w-full
            px-4
            py-2
            text-white
            font-bold
            md:hover:underline
            bg-black
            rounded-md
            bg-opacity-20
            hover:bg-opacity-30
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-opacity-75
          "
        >
          About us
        </div>
      </router-link>
    </div>
    <div class="relative hidden md:inline-block text-left">
      <router-link to="/contact-us">
        <div
          class="
            inline-flex
            justify-center
            w-full
            px-4
            py-2
            text-white
            font-bold
            md:hover:underline
            bg-black
            rounded-md
            bg-opacity-20
            hover:bg-opacity-30
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-opacity-75
          "
        >
          Contact us
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
export default {
  name: "DesktopLinks",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
};
</script>
