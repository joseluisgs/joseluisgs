import { defineClientConfig } from "vuepress/client";
import { onMounted } from "vue";
import LoadingPage from "./components/LoadingPage.vue";
import CookiesBanner from "./components/CookiesBanner.vue";
import ReposPinned from "./components/ReposPinned.vue";
import { loadGA } from "./ga-utils";

export default defineClientConfig({
  rootComponents: [LoadingPage, CookiesBanner],
  enhance({ app }) {
    app.component("ReposPinned", ReposPinned);
  },
  setup() {
    // Reset de scroll global al montar la app
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Cargar GA automáticamente si el usuario ya aceptó previamente
    onMounted(() => {
      if (localStorage.getItem("cookies_consent") === "accepted") {
        loadGA("G-103H05W8P8");
      }

      // Gestionar cookies desde el footer
      const cookieLink = document.querySelector(".cookie-manage");
      if (cookieLink) {
        cookieLink.addEventListener("click", (e) => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent("show-cookie-banner"));
        });
      }

      // Personalizar el título del héroe para resaltar el nombre
      const heroTitle = document.querySelector(".vp-blog-hero-title");
      if (heroTitle && heroTitle.textContent?.includes("José Luis González")) {
        heroTitle.innerHTML = heroTitle.innerHTML.replace(
          "José Luis González",
          '<span class="hero-name-gradient">José Luis González</span>'
        );
      }
    });
  }
});