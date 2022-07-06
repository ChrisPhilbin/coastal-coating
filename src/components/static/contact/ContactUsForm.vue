<template>
  <div class="text-center">
    <div class="grid grid-cols-1 mb-10">
      <Form @submit="handleCommentSubmit" v-slot="{ errors }" :validation-schema="schema" class="ml-auto mr-auto w-80">
        <div class="mr-auto ml-auto">
          <label for="firstName" class="block text-sm text-left font-medium text-gray-500 pb-2">
            Your first name
          </label>

          <Field
            type="text"
            v-model="commentDetails.firstName"
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
        <div class="mr-auto ml-auto">
          <label for="lastName" class="block text-sm text-left font-medium text-gray-500 pb-2"> Your last name </label>

          <Field
            type="text"
            v-model="commentDetails.lastName"
            name="lastName"
            id="lastName"
            class="input-default"
            :class="[errors.lastName ? 'input--error' : 'input--no-error']"
            placeholder="Smith"
          />
          <p class="pt-2 text-left text-sm text-red-500">
            {{ errors.lastName ? "*First name is required" : "" }}
          </p>
        </div>
        <div class="mr-auto ml-auto">
          <label for="phone" class="block text-sm text-left font-medium text-gray-500 pb-2"> Your phone </label>

          <Field
            type="text"
            v-model="commentDetails.phone"
            name="phone"
            id="phone"
            class="input-default"
            :class="[errors.phone ? 'input--error' : 'input--no-error']"
            :placeholder="global.contactInfo.phone"
          />
          <p class="pt-2 text-left text-sm text-red-500">
            {{ errors.phone ? "*Valid phone number is required" : "" }}
          </p>
        </div>
        <div class="mr-auto ml-auto">
          <label for="email" class="block text-sm text-left font-medium text-gray-500 pb-2"> Your email address </label>

          <Field
            type="text"
            v-model="commentDetails.email"
            name="email"
            id="email"
            class="input-default"
            :class="[errors.email ? 'input--error' : 'input--no-error']"
            placeholder="john@example.com"
          />
          <p class="pt-2 text-left text-sm text-red-500">
            {{ errors.email ? "*Valid email address is required" : "" }}
          </p>
        </div>
        <div class="mr-auto ml-auto pt-4">
          <label for="comments" class="block text-sm text-left font-medium text-gray-500 pb-2">
            Questions / comments
          </label>

          <textarea
            rows="5"
            cols="25"
            maxlength="300"
            v-model="commentDetails.comments"
            name="comments"
            id="comments"
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
            placeholder="Questions / comments"
          />
          <p class="pt-2 text-left text-sm text-red-500">
            {{ errors.comments ? "Please include your questions/comments" : "" }}
          </p>
        </div>
        <div class="mr-auto ml-auto pt-4">
          <button
            @click.prevent="handleCommentSubmit"
            class="inline rounded-md w-24 p-3 font-bold"
            :class="[
              Object.keys(errors).length > 1 ||
              !commentDetails.firstName ||
              !commentDetails.lastName ||
              !commentDetails.phone ||
              !commentDetails.email ||
              !commentDetails.comments
                ? 'disabled cursor-not-allowed pointer-events-none bg-gray-500 text-black'
                : 'bg-blue-700 text-white',
            ]"
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
  name: "ContactUsForm",
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
      comments: Yup.string().required(),
    });
    return { schema };
  },
  data() {
    return {
      commentDetails: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
        campaignSource: "Organic",
      },
    };
  },
  mounted() {
    const getSource = localStorage.getItem("campaignSource");
    if (getSource) {
      this.commentDetails.campaignSource = getSource;
    }
  },
  methods: {
    async handleCommentSubmit() {
      try {
        let response = await fetch(`https://us-central1-coastal-coating.cloudfunctions.net/api/comment/new`, {
          method: "POST",
          body: JSON.stringify({
            commentDetails: this.commentDetails,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          this.$router.push("/contact-us/thank-you");
        }
      } catch (error) {
        console.log(error, "Something went wrong.");
        alert("Something went wrong. Please try again in a moment.");
      }
    },
  },
};
</script>
