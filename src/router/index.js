import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/hotel/:id",
    name: "HotelPage",
    component: () => import("@/views/HotelPage.vue"),
  },
  {
    path: "/reservation",
    name: "ReservationPage",
    component: () => import("@/views/ReservationPage.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
