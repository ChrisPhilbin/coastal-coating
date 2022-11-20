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
import Kiosk from "../components/kiosk/Kiosk.vue";
import NotFound from "../components/static/NotFound.vue";
import TopNav from "../components/navigation/TopNav";
import BottomNav from "../components/navigation/BottomNav";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    components: {
      default: AboutUs,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/book-consultation",
    name: "Quote",
    components: {
      default: BookConsultation,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    components: {
      default: ContactUs,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/contact-us/thank-you",
    name: "ContactSuccessThankYou",
    components: {
      default: ContactSuccessThankYou,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/gallery/:make",
    name: "Gallery",
    components: {
      default: Gallery,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/get-services/:campaignSource",
    name: "Landing Page",
    components: {
      default: LandingPage,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/services/ceramic-coating",
    name: "Ceramic Coating",
    components: {
      default: CeramicCoating,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/services/interior-leather-coating",
    name: "Leather Coating",
    components: {
      default: LeatherCoating,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    components: {
      default: ThankYou,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/special/jeep-jam-2022",
    name: "JeepJam22",
    components: {
      default: JeepJam22,
      TopNav,
      BottomNav,
    },
  },
  {
    path: "/kiosk/match-game",
    name: "Kiosk",
    component: Kiosk,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    components: {
      default: NotFound,
      TopNav,
      BottomNav,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
