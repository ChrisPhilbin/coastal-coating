import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/static/AboutUs.vue";
import Home from "../components/Home.vue";
import BookConsultation from "../components/consultation/BookConsultation.vue";
import ContactUs from "../components/static/ContactUs.vue";
import ThankYou from "../components/consultation/ThankYou.vue";
import Gallery from "../components/gallery/Gallery.vue";
import CeramicCoating from "../components/services/CeramicCoating.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/book-consultation",
    name: "Quote",
    component: BookConsultation,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/gallery/:make",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/services/ceramic-coating",
    name: "Ceramic Coating",
    component: CeramicCoating,
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
