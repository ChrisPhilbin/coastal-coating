<template>
  <div class="text-center pt-20 md:pt-2">
    <div class="grid grid-cols-1">
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
            focus:ring-blue-500 focus:border-blue-500
            flex-1
            p-4
            block
            w-full
            rounded
            text-lg
            border-gray-300
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
            focus:ring-blue-500 focus:border-blue-500
            flex-1
            p-4
            block
            w-full
            rounded
            text-lg
            border-gray-300
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
            focus:ring-blue-500 focus:border-blue-500
            flex-1
            p-4
            block
            w-full
            rounded
            text-lg
            border-gray-300
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
            focus:ring-blue-500 focus:border-blue-500
            flex-1
            p-4
            block
            w-full
            rounded
            text-lg
            border-gray-300
          "
          placeholder="(281)-330-8004"
        />
      </div>
      <div class="mr-auto ml-auto pt-4">
        <button
          v-if="step === 1"
          class="disabled inline bg-gray-300 rounded-md w-24 p-3 mr-3"
        >
          Previous
        </button>
        <button
          v-else
          class="inline bg-blue-400 rounded-md w-24 p-3 mr-3"
          @click="step = step - 1"
        >
          Previous
        </button>

        <button
          class="inline bg-blue-400 rounded-md w-24 p-3"
          @click="step = step + 1"
        >
          Next
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
    };
  },
  updated() {
    console.log(this.step, "current step");
  },
};
</script>
