import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

let app = createApp(App);

app.config.globalProperties.global = {
  // backendApiEndpoint: "https://us-central1-coastal-coating.cloudfunctions.net/api",
  backendApiEndpoint: "http://localhost:5001/coastal-coating/us-central1/api",
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
