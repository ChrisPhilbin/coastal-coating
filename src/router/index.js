import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import BookAppointment from "../components/BookAppointment.vue";
import Gallery from "../components/gallery/Gallery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quote",
    name: "Quote",
    component: BookAppointment,
  },
  {
    path: "/gallery/:make",
    name: "Gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
