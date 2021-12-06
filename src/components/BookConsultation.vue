<template>
  <div class="text-center">
    <div class="grid grid-cols-1">
      <Form
        @submit="handleAppointmentSubmit"
        v-slot="{ errors }"
        :validation-schema="schema"
        class="ml-auto mr-auto w-80"
      >
        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <div v-show="step === 1" class="mr-auto ml-auto">
            <div class="mr-auto ml-auto">
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
            <div class="mr-auto ml-auto pt-4">
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
            <div class="mr-auto ml-auto pt-4">
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
            <div class="mr-auto ml-auto pt-4">
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
            </div>
            <p class="pt-2 text-left text-sm text-red-500">
              {{
                errors.phone ? "* Phone must be valid - Ex: 843-999-2636" : ""
              }}
            </p>
          </div>
        </transition>

        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <div v-show="step === 2" class="mr-auto ml-auto">
            <div class="mr-auto ml-auto">
              <label
                for="carYear"
                class="block text-sm text-left font-medium text-gray-500 pb-2"
              >
                Your car's year
              </label>

              <Field
                type="text"
                v-model="appointmentDetails.carYear"
                name="carYear"
                id="carYear"
                class="input-default"
                :class="[errors.carYear ? 'input--error' : 'input--no-error']"
                placeholder="2021"
              />
            </div>
            <p class="pt-2 text-left text-sm text-red-500">
              {{ errors.carYear ? "Must be valid 4 digit year." : "" }}
            </p>

            <div class="mr-auto ml-auto pt-4">
              <label
                for="carMake"
                class="block text-sm text-left font-medium text-gray-500 pb-2"
              >
                Your car's make
              </label>

              <Field
                type="text"
                v-model="appointmentDetails.carMake"
                name="carMake"
                id="carMake"
                class="input-default"
                :class="[errors.carMake ? 'input--error' : 'input--no-error']"
                placeholder="Chevorlet"
              />
            </div>
            <p class="pt-2 text-left text-sm text-red-500">
              {{ errors.carMake }}
            </p>
            <div class="mr-auto ml-auto pt-4">
              <label
                for="carModel"
                class="block text-sm text-left font-medium text-gray-500 pb-2"
              >
                Your car's model
              </label>

              <Field
                type="text"
                v-model="appointmentDetails.carModel"
                name="carModel"
                id="carModel"
                class="input-default"
                :class="[errors.carModel ? 'input--error' : 'input--no-error']"
                placeholder="Corvette"
              />
            </div>
            <p class="pt-2 text-left text-sm text-red-500">
              {{ errors.carModel }}
            </p>
            <div class="mr-auto ml-auto pt-4">
              <label
                for="carMilage"
                class="block text-sm text-left font-medium text-gray-500 pb-2"
              >
                Your car's milage (estimated)
              </label>

              <input
                type="text"
                v-model="appointmentDetails.carMilage"
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
        >
          <div v-show="step === 3" class="mr-auto ml-auto text-left">
            <div class="mr-auto ml-auto">
              <p class="block text-sm text-left font-bold text-gray-500 pb-2">
                What services are you interested in?
              </p>
              <input
                type="checkbox"
                v-model="appointmentDetails.servicesDesired"
                value="Ceramic Coating"
                id="ceramicCoating"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="ceramicCoating"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Ceramic Coating
              </label>
            </div>
            <div class="mr-auto ml-auto">
              <input
                type="checkbox"
                v-model="appointmentDetails.servicesDesired"
                value="Wash and Wax"
                id="washWax"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="washWax"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Wash & wax
              </label>
            </div>
            <div class="mr-auto ml-auto">
              <input
                type="checkbox"
                v-model="appointmentDetails.servicesDesired"
                value="Interior Detailing"
                id="interiorDetailing"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="interiorDetailing"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Interior Detailing
              </label>
            </div>
            <div class="mr-auto ml-auto">
              <p class="block text-sm text-left font-bold text-gray-500 py-3">
                When would be best to contact you?
              </p>
              <input
                type="checkbox"
                v-model="appointmentDetails.bestTimesToConnect"
                value="Between 9am and 12pm"
                id="9to12"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="9to12"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Between 9am and 12pm
              </label>
            </div>
            <div class="mr-auto ml-auto">
              <input
                type="checkbox"
                v-model="appointmentDetails.bestTimesToConnect"
                value="Between 12pm and 4pm"
                id="12to4"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="12to4"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Between 12pm and 4pm
              </label>
            </div>
            <div class="mr-auto ml-auto">
              <input
                type="checkbox"
                v-model="appointmentDetails.bestTimesToConnect"
                value="Between 4pm and 7pm"
                id="4to7"
                class="h-4 w-4 rounded-full mr-2"
              />
              <label
                for="4to7"
                class="inline text-sm text-left text-xl text-gray-500 pb-2"
              >
                Between 4pm and 7pm
              </label>
            </div>
            <div class="mr-auto ml-auto pt-4">
              <label
                for="otherComments"
                class="block text-sm text-left font-medium text-gray-500 pb-2"
              >
                Additional questions?
              </label>

              <textarea
                rows="5"
                cols="25"
                maxlength="300"
                v-model="appointmentDetails.otherComments"
                name="otherComments"
                id="otherComments"
                class="
                  resize-none
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
                placeholder="Anything else you'd like us to know?"
              />
              <p
                class="text-xs pt-2 pl-4"
                :class="[
                  appointmentDetails.otherComments.length === 300
                    ? 'text-red-600'
                    : 'text-gray-300',
                ]"
              >
                {{ appointmentDetails.otherComments.length }} out of 300
                characters used
              </p>
            </div>
          </div>
        </transition>
        <div class="mr-auto ml-auto pt-4">
          <button
            v-if="step === 1"
            type="button"
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
            type="button"
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
            type="button"
            class="inline bg-blue-700 rounded-md w-24 p-3 text-white font-bold"
            @click="step = step + 1"
          >
            Next
          </button>
          <button
            @click.prevent="handleAppointmentSubmit"
            v-else
            class="inline bg-blue-700 rounded-md w-24 p-3 text-white font-bold"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  name: "BookConsultation",
  components: {
    Form,
    Field,
  },
  setup() {
    const phoneRegEx =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      phone: Yup.string().required().matches(phoneRegEx),
      carYear: Yup.string()
        .required()
        .matches(/^(19|20)\d{2}$/),
      carMake: Yup.string().required(),
      carModel: Yup.string().required(),
      carMilage: Yup.number().required(),
    });
    return { schema };
  },
  data() {
    return {
      step: 1,
      appointmentDetails: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        carYear: "",
        carMake: "",
        carModel: "",
        carMilage: "",
        servicesDesired: [],
        bestTimesToConnect: [],
        otherComments: "",
      },
    };
  },
  methods: {
    async handleAppointmentSubmit(values) {
      console.log(values);
      try {
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
        let data = await response.json();
        if (response.ok) {
          console.log(data);
          alert("Success!");
        }
      } catch (error) {
        console.log(error);
        //do something with error
      }
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
  },
};
</script>
