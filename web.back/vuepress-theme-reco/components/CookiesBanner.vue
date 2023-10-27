<template>
  <div class="cookie-consent-banner" v-if="visible">
    <div class="cookie-consent-banner__inner">
      <div class="cookie-consent-banner__copy">
        <div class="cookie-consent-banner__header">Aviso de cookies 🍪</div>
        <div class="cookie-consent-banner__description">
          Esta web usa <a :href="url">cookies</a> para asegurar una mejor experiencia de
          usuario: temas, analíticas y recursos. <br> <strong>Si sigues utilizando la web, estás indicando tu conformidad.</strong>
        </div>
      </div>
      <div class="cookie-consent-banner__actions">
        <a href="#" class="cookie-consent-banner__cta" v-on:click.prevent="accionAceptar"> <strong>Aceptar</strong> </a>
       <!--  <a
          href="#"
          class="cookie-consent-banner__cta cookie-consent-banner__cta--secondary"
        >
          Decline
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesBanner',
  data: () => ({
    texto: 'Mundo Vuepress',
    url: '/docs/legal/',
    visible: false,
  }),

  mounted() {
    const cookies_aceptadas = localStorage.getItem('cookies_aceptadas');
    if (cookies_aceptadas !== 'true' ) {
       // console.log('No hay cookies');
       this.visible = true;
    }
  },

  methods: {
    accionAceptar() {
      // console.log('Has pulsado aceptar ->');
      this.visible = false;
      localStorage.setItem('cookies_aceptadas', 'true'); // Use cookies
    },
  },
};
</script>

<style>
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2147483645;
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f6f4;
}

.cookie-consent-banner__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 0;
}

.cookie-consent-banner__copy {
  margin-bottom: 16px;
  margin-left: 5px;
}

.cookie-consent-banner__actions {
  margin-left: 5px;
}

.cookie-consent-banner__header {
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px; 
  line-height: 24px;
  color:#4586ad
}

.cookie-consent-banner__description {
  font-weight: normal;
  color: #838f93;
  /* font-size: 16px; */
  line-height: 24px;
}

.cookie-consent-banner__cta {
  box-sizing: border-box;
  display: inline-block;
  min-width: 164px;
  padding: 11px 13px;

  border-radius: 2px;

  background-color: #2ce080;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-weight: normal;
  /* font-size: 16px; */
  line-height: 20px;
}

.cookie-consent-banner__cta--secondary {
  padding: 9px 13px;

  border: 2px solid #3a4649;

  background-color: transparent;

  color: #2ce080;
}

.cookie-consent-banner__cta:hover {
  background-color: #20ba68;
}

.cookie-consent-banner__cta--secondary:hover {
  border-color: #838f93;

  background-color: transparent;

  color: #22c870;
}

.cookie-consent-banner__cta:last-child {
  /* margin-left: 16px; */
}
</style>