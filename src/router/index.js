import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import GenerateQuote from "../components/GenerateQuote.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quote",
    name: "Quote",
    component: GenerateQuote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
