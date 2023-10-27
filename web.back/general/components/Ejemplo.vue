<template>
  <div>
    <p>Hola</p>
    {{ texto }}
  </div>
</template>

<script>
export default {
  name: 'Ejemplo',
  data: () => ({
    texto: 'Mundo Vuepress',
  }),
}
</script>

<style>
</style>