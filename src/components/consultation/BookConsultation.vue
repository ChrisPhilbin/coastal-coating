<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:w-3/4 mb-10 ml-auto mr-auto">
    <div class="text-center">
      <Form
        @submit="handleAppointmentSubmit"
        v-slot="{ errors }"
        :validation-schema="schema"
        class="ml-auto mr-auto w-80"
      >
        <consultation-progress-vue :currentStep="step"></consultation-progress-vue>
        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <div v-show="step === 1" class="mr-auto ml-auto">
            <div class="mr-auto ml-auto">
              <label for="firstName" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              <label for="lastName" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              <label for="email" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              <label for="phoneNumber" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              {{ errors.phone ? "* Phone must be valid - Ex: 843-999-2636" : "" }}
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
              <label for="carYear" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              <label for="carMake" class="block text-sm text-left font-medium text-gray-500 pb-2">
                Your car's make
              </label>

              <Field
                type="text"
                v-model="appointmentDetails.carMake"
                name="carMake"
                id="carMake"
                class="input-default"
                :class="[errors.carMake ? 'input--error' : 'input--no-error']"
                placeholder="Chevrolet"
              />
            </div>
            <p class="pt-2 text-left text-sm text-red-500">
              {{ errors.carMake ? "Must provide your car's make" : "" }}
            </p>
            <div class="mr-auto ml-auto pt-4">
              <label for="carModel" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
              {{ errors.carModel ? "Must provide your car's model" : "" }}
            </p>
            <div class="mr-auto ml-auto pt-4">
              <label for="carMilage" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
          <div v-show="step === 3" class="mr-auto ml-auto">
            <div class="text-left">
              <div class="mr-auto ml-auto">
                <p class="block text-sm text-left font-bold text-gray-500 pb-2">What services are you interested in?</p>
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Ceramic Coating"
                  id="ceramicCoating"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="ceramicCoating" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Ceramic Coating
                </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Wheel Coating"
                  id="wheelCoating"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="wheelCoating" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Wheel Coating
                </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Window Coating"
                  id="windowCoating"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="windowCoating" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Window Coating
                </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Leather Coating"
                  id="leatherCoating"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="leatherCoating" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Leather Coating
                </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Convertible Top Coating"
                  id="convertibleTopCoating"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="convertibleTopCoating" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Convertible Top Coating
                </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Detailing"
                  id="detailing"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="detailing" class="inline text-sm text-left text-xl text-gray-500 pb-2"> Detailing </label>
              </div>
              <div class="mr-auto ml-auto">
                <input
                  type="checkbox"
                  v-model="appointmentDetails.servicesDesired"
                  value="Ceramic Wax & Polish"
                  id="ceramicWaxPolish"
                  class="h-4 w-4 rounded-full mr-2"
                />
                <label for="ceramicWaxPolish" class="inline text-sm text-left text-xl text-gray-500 pb-2">
                  Ceramic Wax & Polish
                </label>
              </div>
              <div class="mr-auto ml-auto pt-4">
                <label for="otherComments" class="block text-sm text-left font-medium text-gray-500 pb-2">
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
                  :class="[appointmentDetails.otherComments.length === 300 ? 'text-red-600' : 'text-gray-300']"
                >
                  {{ appointmentDetails.otherComments.length }} out of 300 characters used
                </p>
              </div>
            </div>
            <div class="mr-auto ml-auto pt-4 inline-block">
              <vue-recaptcha :sitekey="global.googleReCaptchaKey" @verify="onVerifyCaptcha"></vue-recaptcha>
            </div>
          </div>
        </transition>
        <div class="mr-auto ml-auto pt-4 inline-block">
          <button
            v-if="step === 1"
            type="button"
            class="disabled cursor-not-allowed inline bg-gray-500 rounded-md w-24 p-3 mr-3"
          >
            Previous
          </button>
          <button
            v-else
            type="button"
            class="inline bg-blue-700 rounded-md w-24 p-3 mr-3 text-white font-bold"
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
            v-else
            @click.prevent="handleAppointmentSubmit"
            class="inline rounded-md w-24 p-3 font-bold"
            :class="[
              Object.keys(errors).length > 1 ||
              !appointmentDetails.firstName ||
              !appointmentDetails.lastName ||
              !appointmentDetails.phone ||
              !appointmentDetails.email ||
              !appointmentDetails.carYear ||
              !appointmentDetails.carMake ||
              !appointmentDetails.carModel ||
              !appointmentDetails.carMilage ||
              inSubmission ||
              hasBlankCaptcha
                ? 'disabled cursor-not-allowed pointer-events-none bg-gray-500 text-black'
                : 'bg-blue-700 text-white',
            ]"
          >
            {{ inSubmission ? `Sending...` : `Submit` }}
          </button>
        </div>
      </Form>
    </div>
    <div class="text-center mt-6">
      <customer-reviews></customer-reviews>
    </div>
  </div>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
import formMixin from "../../mixins/form/formMixin";
import { Form, Field } from "vee-validate";
import ConsultationProgressVue from "./ConsultationProgress.vue";
import CustomerReviews from "./CustomerReviews.vue";
import * as Yup from "yup";
export default {
  name: "BookConsultation",
  components: {
    Form,
    Field,
    ConsultationProgressVue,
    CustomerReviews,
    VueRecaptcha,
  },
  mixins: [formMixin],
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
      hasBlankCaptcha: true,
      inSubmission: false,
      errorCount: 0,
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
        otherComments: "",
        campaignSource: "organic",
      },
    };
  },
  mounted() {
    const campaignSource = this.$route.query.campaignSource;
    const existingCampaignSource = localStorage.getItem("campaignSource");
    if (campaignSource) {
      const newCampaignSource = this.getCampaignSource(campaignSource);
      localStorage.setItem("campaignSource", newCampaignSource);
      this.appointmentDetails.campaignSource = newCampaignSource;
    } else if (existingCampaignSource) {
      this.appointmentDetails.campaignSource = this.getCampaignSource(existingCampaignSource);
    }
  },
  methods: {
    onVerifyCaptcha() {
      this.hasBlankCaptcha = false;
    },
    async handleAppointmentSubmit() {
      try {
        this.inSubmission = true;
        let response = await fetch(`${this.global.backendApiEndpoint}/book-appointment`, {
          method: "POST",

          body: JSON.stringify({
            appointmentDetails: this.appointmentDetails,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          this.$router.push("/thank-you");
        }
      } catch (error) {
        console.log(error, "Something went wrong.");
        alert("Something went wrong! Please make sure all required fields are filled out");
        this.step = 1;
        this.errorCount++;
        this.inSubmission = false;
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
