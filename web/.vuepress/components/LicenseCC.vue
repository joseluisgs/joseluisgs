<template>
  <article>
    <img
      src="https://github.com/joseluisgs/joseluisgs/raw/master/images/octogato.png"
      width="15%"
      align="right"
    />
    <p>
      Copyright © {{ year }}
      <a href="https://joseluisgs.github.io/">José Luis González Sánchez</a> &nbsp;
      <a href="https://joseluisgs.github.io" target="_blank"
        ><span class="iconify" data-icon="gg:website"></span
      ></a>
      &nbsp;
      <a href="https://github.com/joseluisgs" target="_blank"
        ><span class="iconify" data-icon="akar-icons:github-fill"></span
      ></a>
      &nbsp;
      <a href="https://twitter.com/joseluisgonsan" target="_blank"
        ><span class="iconify" data-icon="fa-brands:twitter"></span
      ></a>
      &nbsp;
      <a href="https://www.linkedin.com/in/joseluisgonsan/" target="_blank"
        ><span class="iconify" data-icon="fa-brands:linkedin"></span
      ></a>
      &nbsp;
      <a href="https://g.dev/joseluisgs" target="_blank"
        ><span class="iconify" data-icon="mdi:dev-to"></span
      ></a>
      &nbsp;
      <a href="https://www.youtube.com/@joseluisgs" target="_blank"
        ><span class="iconify" data-icon="fa-brands:youtube"></span
      ></a>
      &nbsp;
    </p>
    <p>
      Dicen que es de bien nacido ser agradecido. Es por ello que puedes usar estos contenidos
      siempre y cuando:
      <ul>
        <li>Reconozcas y cites a su autor y fuente siempre que vayas a usarla, compartirla y/o modificarla.</li>
        <li>Si la compartes/modificas debes aceptar y aplicar los mismos términos de esta licencia.</li>
        <li>Solo puedes usar los contenidos para uso docente, formativo, aprendizaje, investigación o cualquier otra
        finalidad que no sea comercial o provoque un ánimo de lucro.</li>
      </ul>
    </p>
    <p>
      Te pido que respetes las horas de trabajo que he tenido como autor citándome en la fuente donde hagas
        uso de estos proyectos, apuntes, contenidos o códigos. Si tienes dudas puedes contactar conmigo.
    </p>
    <p>¡Muchas Gracias!</p>
    <p>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">JoseLuisGS</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://joseluisgs.github.io/" property="cc:attributionName" rel="cc:attributionURL">José Luis González Sánchez</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.<br />Creado a partir de la obra en <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/joseluisgs" rel="dct:source">https://github.com/joseluisgs</a>.
    </p>
  </article>
</template>

<script>
export default {
  name: "LicenseMit",
  data: () => ({
    year: new Date().getFullYear(),
  }),

  // Utilizo la api fecth que es nativa y me ahorro instalar axios, pues solo es un GET
  // Mounted por SSR
  async mounted() {
    const response = await fetch("https://gh-pinned-repos.egoist.sh/?username=joseluisgs");
    const data = await response.json();
    this.repositorios = data;
  },
};
</script>

<style>
</style>