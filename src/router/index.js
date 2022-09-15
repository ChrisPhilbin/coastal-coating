import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/static/AboutUs.vue";
import Home from "../components/Home.vue";
import BookConsultation from "../components/consultation/BookConsultation.vue";
import ContactUs from "../components/static/ContactUs.vue";
import ContactSuccessThankYou from "../components/static/contact/ContactSuccessThankYou.vue";
import ThankYou from "../components/consultation/ThankYou.vue";
import Gallery from "../components/gallery/Gallery.vue";
import LandingPage from "../components/landing/generic/LandingPage.vue";
import CeramicCoating from "../components/services/CeramicCoating.vue";
import LeatherCoating from "../components/services/LeatherCoating.vue";
import JeepJam22 from "../components/landing/special/jeep-jam-22/JeepJam22.vue";
import NotFound from "../components/static/NotFound.vue";

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
    path: "/contact-us/thank-you",
    name: "ContactSuccessThankYou",
    component: ContactSuccessThankYou,
  },
  {
    path: "/gallery/:make",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/get-services/:campaignSource",
    name: "Landing Page",
    component: LandingPage,
  },
  {
    path: "/services/ceramic-coating",
    name: "Ceramic Coating",
    component: CeramicCoating,
  },
  {
    path: "/services/interior-leather-coating",
    name: "Leather Coating",
    component: LeatherCoating,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/special/jeep-jam-2022",
    name: "JeepJam22",
    component: JeepJam22,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
