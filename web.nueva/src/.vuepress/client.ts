import { defineClientConfig } from "vuepress/client";
import LoadingPage from "./components/LoadingPage.vue";
import CookiesBanner from "./components/CookiesBanner.vue";
import ReposPinned from "./components/ReposPinned.vue";

export default defineClientConfig({
  rootComponents: [LoadingPage, CookiesBanner],
  enhance({ app }) {
    app.component("ReposPinned", ReposPinned);
  },
  setup() {
    // Reset de scroll global al montar la app
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
});