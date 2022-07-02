import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

let app = createApp(App);

app.config.globalProperties.global = {
  orgName: "Coastal Coating",
  defaultPageTitle: "Coastal Coating - The Grand Strand's Leader in Ceramic Coating",
  contactInfo: {
    address: {
      street: "115-C Prather Park Dr.",
      city: "Myrtle Beach",
      state: "SC",
      zip: "29588",
    },
    phone: "(843)-999-2636",
    email: "coastalcoatingmb@gmail.com",
  },
};

app.use(store).use(router).mount("#app");
