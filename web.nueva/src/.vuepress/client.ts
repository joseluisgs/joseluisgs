import { defineClientConfig } from "vuepress/client";
import LoadingPage from "./components/LoadingPage.vue";

export default defineClientConfig({
  rootComponents: [LoadingPage],
});