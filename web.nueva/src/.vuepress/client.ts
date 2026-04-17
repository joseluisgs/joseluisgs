import { defineClientConfig } from "vuepress/client";
import LoadingPage from "./components/LoadingPage.vue";
import CookiesBanner from "./components/CookiesBanner.vue";

export default defineClientConfig({
  rootComponents: [LoadingPage, CookiesBanner],
});