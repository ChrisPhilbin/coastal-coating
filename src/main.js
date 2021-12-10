import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

let app = createApp(App);

app.config.globalProperties.global = { orgName: "Coastal Coating" };

app.use(store).use(router).mount("#app");
