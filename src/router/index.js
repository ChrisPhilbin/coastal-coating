import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import BookConsultation from "../components/BookConsultation.vue";
import ThankYou from "../components/consultation/ThankYou.vue";
import Gallery from "../components/gallery/Gallery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/book-consultation",
    name: "Quote",
    component: BookConsultation,
  },
  {
    path: "/gallery/:make",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
