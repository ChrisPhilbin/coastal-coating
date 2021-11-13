<template>
  <button
    class="absolute hidden md:inline right-8 top-4 bg-green-200 p-2 rounded-md"
  >
    Get a quote
  </button>

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
          divide-y divide-gray-100
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex rounded-tl-md rounded-tr-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Chevrolet
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Ford
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
              Nissan
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Jeep
            </button>
          </MenuItem>
        </div>

        <div>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex radius-bl-md radius-br-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              BMW
            </button>
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
          w-40
          mt-2
          origin-top-right
          bg-white
          divide-y divide-gray-100
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex rounded-tl-md rounded-tr-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Ceramic Coating
            </button>
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
              Wash & Wax
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Interiors
            </button>
          </MenuItem>
        </div>

        <div>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-200 text-black' : 'text-gray-900',
                'group flex radius-bl-md radius-br-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              Recreational vehicles
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <Menu as="div" class="relative hidden md:inline-block text-left">
    <div class="relative hidden md:inline-block text-left">
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
        About us
      </MenuButton>
    </div>
    <div class="relative hidden md:inline-block text-left">
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
        Contact us
      </MenuButton>
    </div>
  </Menu>
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
