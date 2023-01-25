import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../View/HomePage.vue";
import AboutPage from "../View/AboutPage.vue";
import GamesPageVue from "../View/GamesPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/games", component: GamesPageVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
