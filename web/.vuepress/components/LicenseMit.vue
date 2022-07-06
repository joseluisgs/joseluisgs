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
    </p>

    <p>
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software
      and associated documentation files (the “Software”), to deal in the Software without
      restriction, including without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
      Software is furnished to do so, subject to the following conditions:
    </p>

    <p>
      The above copyright notice and this permission notice shall be included in all copies or
      substantial portions of the Software.
    </p>

    <p>
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
      BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
  </article>
</template>

<script>
export default {
  name: 'LicenseMit',
  data: () => ({
    year: new Date().getFullYear(),
  }),

  // Utilizo la api fecth que es nativa y me ahorro instalar axios, pues solo es un GET
  // Mounted por SSR
  async mounted() {
    const response = await fetch('https://gh-pinned-repos.egoist.sh/?username=joseluisgs');
    const data = await response.json();
    this.repositorios = data;
  },
};
</script>

<style>
</style>