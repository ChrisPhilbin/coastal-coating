<template>
  <div class="text-center">
    <div class="grid grid-cols-1">
      <div v-if="step === 1" class="mr-auto ml-auto">
        <div class="mr-auto ml-auto">
          <label
            for="firstName"
            class="block text-sm text-left font-medium text-gray-500 pb-2"
          >
            Your first name
          </label>

          <input
            type="text"
            v-model="firstName"
            name="firstName"
            id="firstName"
            class="
              focus:ring-2 focus:ring-blue-700 focus:outline-none
              flex-1
              p-4
              block
              w-full
              rounded-lg
              bg-black
              text-lg text-white
              border border-blue-700
              placeholder-gray-600
            "
            placeholder="John"
          />
        </div>
        <div class="mr-auto ml-auto pt-4">
          <label
            for="lastName"
            class="block text-sm text-left font-medium text-gray-500 pb-2"
          >
            Your last name
          </label>

          <input
            type="text"
            v-model="lastName"
            name="lastName"
            id="lastName"
            class="
              focus:ring-2 focus:ring-blue-700 focus:outline-none
              flex-1
              p-4
              block
              w-full
              rounded-lg
              bg-black
              text-lg text-white
              border border-blue-700
              placeholder-gray-600
            "
            placeholder="Smith"
          />
        </div>
        <div class="mr-auto ml-auto pt-4">
          <label
            for="email"
            class="block text-sm text-left font-medium text-gray-500 pb-2"
          >
            Your email address
          </label>

          <input
            type="text"
            v-model="email"
            name="email"
            id="email"
            class="
              focus:ring-2 focus:ring-blue-700 focus:outline-none
              flex-1
              p-4
              block
              w-full
              rounded-lg
              bg-black
              text-lg text-white
              border border-blue-700
              placeholder-gray-600
            "
            placeholder="john.smith@example.com"
          />
        </div>
        <div class="mr-auto ml-auto pt-4">
          <label
            for="phoneNumber"
            class="block text-sm text-left font-medium text-gray-500 pb-2"
          >
            Your phone number
          </label>

          <input
            type="text"
            v-model="phone"
            name="phone"
            id="phone"
            class="
              focus:ring-2 focus:ring-blue-700 focus:outline-none
              flex-1
              p-4
              block
              w-full
              rounded-lg
              bg-black
              text-lg text-white
              border border-blue-700
              placeholder-gray-600
            "
            placeholder="(281)-330-8004"
          />
        </div>
      </div>

      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-500 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="step === 2" class="mr-auto ml-auto">
          <div class="mr-auto ml-auto">
            <label
              for="carYear"
              class="block text-sm text-left font-medium text-gray-500 pb-2"
            >
              Your car's year
            </label>

            <input
              type="text"
              v-model="carYear"
              name="carYear"
              id="carYear"
              class="
                focus:ring-2 focus:ring-blue-700 focus:outline-none
                flex-1
                p-4
                block
                w-full
                rounded-lg
                bg-black
                text-lg text-white
                border border-blue-700
                placeholder-gray-600
              "
              placeholder="2021"
            />
          </div>
          <div class="mr-auto ml-auto pt-4">
            <label
              for="carMake"
              class="block text-sm text-left font-medium text-gray-500 pb-2"
            >
              Your car's make
            </label>

            <input
              type="text"
              v-model="carMake"
              name="carMake"
              id="carMake"
              class="
                focus:ring-2 focus:ring-blue-700 focus:outline-none
                flex-1
                p-4
                block
                w-full
                rounded-lg
                bg-black
                text-lg text-white
                border border-blue-700
                placeholder-gray-600
              "
              placeholder="Chevorlet"
            />
          </div>
          <div class="mr-auto ml-auto pt-4">
            <label
              for="carModel"
              class="block text-sm text-left font-medium text-gray-500 pb-2"
            >
              Your car's model
            </label>

            <input
              type="text"
              v-model="carModel"
              name="carModel"
              id="carModel"
              class="
                focus:ring-2 focus:ring-blue-700 focus:outline-none
                flex-1
                p-4
                block
                w-full
                rounded-lg
                bg-black
                text-lg text-white
                border border-blue-700
                placeholder-gray-600
              "
              placeholder="Corvette"
            />
          </div>
          <div class="mr-auto ml-auto pt-4">
            <label
              for="carMilage"
              class="block text-sm text-left font-medium text-gray-500 pb-2"
            >
              Your car's milage (estimated)
            </label>

            <input
              type="text"
              v-model="carMilage"
              name="carMilage"
              id="carMilage"
              class="
                focus:ring-2 focus:ring-blue-700 focus:outline-none
                flex-1
                p-4
                block
                w-full
                rounded-lg
                bg-black
                text-lg text-white
                border border-blue-700
                placeholder-gray-600
              "
              placeholder="15,000"
            />
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-500 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="step === 3" class="mr-auto ml-auto text-left">
          <div class="mr-auto ml-auto">
            <label
              for="ceramicCoating"
              class="inline text-sm text-left text-xl text-gray-500 pb-2"
            >
              Ceramic Coating
            </label>

            <input
              type="checkbox"
              v-model="servicesDesired"
              value="Ceramic Coating"
              id="ceramicCoating"
            />
          </div>
          <div class="mr-auto ml-auto">
            <label
              for="washWax"
              class="inline text-sm text-left text-xl text-gray-500 pb-2"
            >
              Wash & wax
            </label>

            <input
              type="checkbox"
              v-model="servicesDesired"
              value="Wash and Wax"
              id="washWax"
            />
          </div>
        </div>
      </transition>
      <div class="mr-auto ml-auto pt-4">
        <button
          v-if="step === 1"
          class="
            disabled
            cursor-not-allowed
            inline
            bg-gray-500
            rounded-md
            w-24
            p-3
            mr-3
          "
        >
          Previous
        </button>
        <button
          v-else
          class="
            inline
            bg-blue-700
            rounded-md
            w-24
            p-3
            mr-3
            text-white
            font-bold
          "
          @click="step = step - 1"
        >
          Previous
        </button>

        <button
          v-if="step < 3"
          class="inline bg-blue-700 rounded-md w-24 p-3 text-white font-bold"
          @click="step = step + 1"
        >
          Next
        </button>
        <button
          v-else
          class="inline bg-blue-700 rounded-md w-24 p-3 text-white font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenerateQuote",
  data() {
    return {
      step: 1,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      carYear: "",
      carMake: "",
      carModel: "",
      carMilage: "",
      servicesDesired: [],
      dateDesired: "",
    };
  },
};
</script>
