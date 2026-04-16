<template>
  <div class="friend-links">
    <VPCard
      v-for="friend in friends"
      :key="friend.link"
      :title="friend.title"
      :desc="friend.desc"
      :logo="friend.logo"
      :link="friend.link"
      class="friend-card"
    />
  </div>
</template>

<script setup>
const friends = [
  {
    title: "IES Luis Vives",
    desc: "Instituto de Educación Secundaria Luis Vives, Leganés.",
    link: "https://iesluisvives.es",
    logo: "https://www.iesluisvives.es/Design/Themes/IESluisvivies/Images/logo.png",
  },
  {
    title: "CIFP Virgen de Gracia",
    desc: "Centro Integrado de Formación Profesional Virgen de Gracia, Puertollano.",
    link: "https://cifpvirgendegracia.com",
    logo: "https://cifpvirgendegracia.com/wp-content/uploads/2019/11/LogoIcon.png",
  },
  {
    title: "Kotlin",
    desc: "Página web de Kotlin by Jetbrains",
    link: "https://kotlinlang.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/kotlin-2.svg",
  },
  {
    title: "GitHub",
    desc: "Página web de GitHub.",
    link: "https://github.com",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    title: "GitKraken",
    desc: "El mejor cliente para Git y GitHub.",
    link: "https://www.gitkraken.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/gitkraken.svg",
  },
  {
    title: "Jetbrains Academy",
    desc: "El mejor lugar para aprender programación.",
    link: "https://www.jetbrains.com/es-es/academy/",
    logo: "https://cdn.worldvectorlogo.com/logos/jetbrains-1.svg",
  },
  {
    title: "Hyperskill",
    desc: "Todo lo que necesitea aprender está aquí.",
    link: "https://hyperskill.org/tracks/",
    logo: "https://styles.redditmedia.com/t5_16kxt3/styles/communityIcon_whsnivfzm6ha1.png",
  },
  {
    title: "Tabnine",
    desc: "Mejora la productividad en tu código.",
    link: "https://www.tabnine.com/",
    logo: "https://avatars.githubusercontent.com/u/73937337?s=280&v=4",
  },
  {
    title: "DevExperto",
    desc: "El mejor lugar para aprender Android.",
    link: "https://devexperto.com/",
    logo: "https://static-1.ivoox.com/canales/6/4/6/8/5351456308646_XXL.jpg",
  },
  {
    title: "KotlinExpert",
    desc: "El mejor lugar para aprender Kotlin.",
    link: "https://kotlinexpert.com/",
    logo: "https://github.com/joseluisgs/KotlinExpert/raw/main/images/logo-grande-png.png",
  },
  {
    title: "Escuela Vue",
    desc: "El mejor lugar para aprender Vue.js.",
    link: "https://escuelavue.es/",
    logo: "https://pbs.twimg.com/profile_images/1231637295687720960/GX8p-Q-a_400x400.jpg",
  },
];
</script>

<style scoped>
.friend-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.friend-card {
  transition: transform 0.3s ease;
}

.friend-card:hover {
  transform: translateY(-5px);
}
</style>
