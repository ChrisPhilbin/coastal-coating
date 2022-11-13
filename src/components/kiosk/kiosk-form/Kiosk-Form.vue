<template>
  <p class="block text-center text-xl font-bold">
    Claim your {{ discountEarned }}% discount by filling out the form below
  </p>
  <Form
    @submit="handleKioskSubmit"
    v-slot="{ errors }"
    :validation-schema="schema"
    class="ml-auto mr-auto w-3/4"
  >
    <div class="m-10 grid grid-cols-2 gap-4">
      <div>
        <label
          for="firstName"
          class="block text-sm text-left font-medium text-gray-500 pb-2"
        >
          Your first name
        </label>

        <Field
          type="text"
          v-model="appointmentDetails.firstName"
          name="firstName"
          id="firstName"
          class="input-default"
          :class="[errors.firstName ? 'input--error' : 'input--no-error']"
          placeholder="John"
        />
        <p class="pt-2 text-left text-sm text-red-500">
          {{ errors.firstName ? "*First name is required" : "" }}
        </p>
      </div>

      <div>
        <label
          for="lastName"
          class="block text-sm text-left font-medium text-gray-500 pb-2"
        >
          Your last name
        </label>

        <Field
          type="text"
          v-model="appointmentDetails.lastName"
          name="lastName"
          id="lastName"
          class="input-default"
          :class="[errors.lastName ? 'input--error' : 'input--no-error']"
          placeholder="Smith"
        />
        <p class="pt-2 text-left text-sm text-red-500">
          {{ errors.lastName ? "*Last name is required" : "" }}
        </p>
      </div>

      <div>
        <label
          for="email"
          class="block text-sm text-left font-medium text-gray-500 pb-2"
        >
          Your email address
        </label>

        <Field
          type="email"
          v-model="appointmentDetails.email"
          name="email"
          id="email"
          class="input-default"
          :class="[errors.email ? 'input--error' : 'input--no-error']"
          placeholder="john.smith@example.com"
        />
        <p class="pt-2 text-left text-sm text-red-500">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label
          for="phoneNumber"
          class="block text-sm text-left font-medium text-gray-500 pb-2"
        >
          Your phone number
        </label>

        <Field
          type="phone"
          v-model="appointmentDetails.phone"
          name="phone"
          id="phone"
          class="input-default"
          :class="[errors.phone ? 'input--error' : 'input--no-error']"
          placeholder="843-999-2636"
        />
        <p class="pt-2 text-left text-sm text-red-500">
          {{ errors.phone ? "* Phone must be valid - Ex: 843-999-2636" : "" }}
        </p>
      </div>
    </div>
    <div class="w-full block flex text-center p-4">
      <div class="w-full block text-center">
        <button
          @click.prevent="handleKioskSubmit"
          class="block w-2/4 rounded-md p-3 font-bold mx-auto"
          :class="[
            Object.keys(errors).length > 1 ||
            !appointmentDetails.firstName ||
            !appointmentDetails.lastName ||
            !appointmentDetails.phone ||
            !appointmentDetails.email ||
            inSubmission
              ? 'disabled cursor-not-allowed pointer-events-none bg-gray-500 text-black'
              : 'bg-blue-700 text-white',
          ]"
        >
          {{ inSubmission ? `Sending...` : `Submit` }}
        </button>
      </div>
    </div>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import formMixin from "../../../mixins/form/formMixin";
import * as Yup from "yup";

export default {
  name: "KioskForm",
  props: ["discountEarned"],
  components: { Form, Field },
  mixins: [formMixin],
  setup() {
    const phoneRegEx =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      phone: Yup.string().required().matches(phoneRegEx),
    });
    return { schema };
  },
  data() {
    return {
      inSubmission: false,
      appointmentDetails: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        campaignSource: "kiosk",
        discountEarned: this.discountEarned,
      },
    };
  },
  methods: {
    async handleKioskSubmit() {
      try {
        this.inSubmission = true;
        let response = await fetch(
          `https://us-central1-coastal-coating.cloudfunctions.net/api/book-appointment`,
          {
            method: "POST",

            body: JSON.stringify({
              appointmentDetails: this.appointmentDetails,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          //display thank you message within modal and set a timeout to reset it after 5 to 10 seconds
        }
      } catch (error) {
        console.log(error, "Something went wrong.");
        alert(
          "Something went wrong! Please make sure all required fields are filled out"
        );
        this.inSubmission = false;
      }
    },
  },
  mounted() {
    console.log("Kiosk form component has been mounted.");
  },
};
</script>
