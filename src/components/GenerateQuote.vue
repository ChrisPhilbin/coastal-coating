<template>
  <div class="text-center pt-20 md:pt-2">
    <div class="grid grid-cols-1 md:grid-cols-2">
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
            block
            w-full
            rounded
            sm:text-sm
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
            block
            w-full
            rounded
            sm:text-sm
            border-gray-300
          "
          placeholder="Smith"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "GenerateQuote",
    data() {
        return {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            carYear: "",
            carMake: "",
            carModel: "",
            carMilage: "",
            servicesDesired: [],
        }
    }
}
</script>
