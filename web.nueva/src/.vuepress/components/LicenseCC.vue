<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <article class="license-cc">
    <img
      src="/img/octogato.png"
      width="15%"
      style="float: right; margin-left: 1rem;"
      alt="Octogato"
    />
    <p>
      Copyright © {{ year }}
      <a href="https://joseluisgs.dev/">José Luis González Sánchez</a> &nbsp;
      <a href="https://joseluisgs.dev" target="_blank">
        <i class="fa-solid fa-globe"></i>
      </a>
      &nbsp;
      <a href="https://github.com/joseluisgs" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
      &nbsp;
      <a href="https://x.com/JoseLuisGS_" target="_blank">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/joseluisgonsan/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      &nbsp;
      <a href="https://g.dev/joseluisgs" target="_blank">
        <i class="fa-solid fa-code"></i>
      </a>
      &nbsp;
      <a href="https://www.youtube.com/@joseluisgs" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>
    </p>
    <div class="license-text">
      <p>
        Dicen que es de bien nacido ser agradecido. Es por ello que puedes usar estos contenidos
        siempre y cuando:
      </p>
      <ul>
        <li>Reconozcas y cites a su autor y fuente siempre que vayas a usarla, compartirla y/o modificarla.</li>
        <li>Si la compartes/modificas debes aceptar y aplicar los mismos términos de esta licencia.</li>
        <li>Solo puedes usar los contenidos para uso docente, formativo, aprendizaje, investigación o cualquier otra
        finalidad que no sea comercial o provoque un ánimo de lucro.</li>
      </ul>
      <p>
        Te pido que respetes las horas de trabajo que he tenido como autor citándome en la fuente donde hagas
        uso de estos proyectos, apuntes, contenidos o códigos. Si tienes dudas puedes contactar conmigo.
      </p>
      <p>¡Muchas Gracias!</p>
    </div>
    <div class="license-footer">
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
      </a>
      <br />
      <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">JoseLuisGS</span> by 
      <a xmlns:cc="http://creativecommons.org/ns#" href="https://joseluisgs.dev/" property="cc:attributionName" rel="cc:attributionURL">José Luis González Sánchez</a> 
      is licensed under a 
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.
      <br />
      Creado a partir de la obra en <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/joseluisgs" rel="dct:source">https://github.com/joseluisgs</a>.
    </div>
  </article>
</template>

<style scoped>
.license-cc {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.license-text {
  margin-bottom: 1.5rem;
}

.license-footer {
  font-size: 0.9rem;
  color: var(--text-color-lighter);
}
</style>
