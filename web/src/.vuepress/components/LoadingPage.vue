<template>
  <Transition name="fade">
    <div v-if="show" id="loader-wrapper">
      <div class="loader-main">
        <div v-for="item in 4" :key="`loader-${item}`"></div>
      </div>
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSiteData } from 'vuepress/client';

const site = useSiteData();
const show = ref(true);

const title = computed(() => site.value.title || 'JoseLuisGS');
const description = computed(() => site.value.description || 'Cargando contenido...');

onMounted(() => {
  const hasLoaded = sessionStorage.getItem('hasLoaded');
  
  if (!hasLoaded) {
    sessionStorage.setItem('hasLoaded', 'true');
    setTimeout(() => {
      show.value = false;
      document.body.classList.add('page-loaded');
      window.scrollTo(0, 0); // ¡Magia para subir arriba!
    }, 1500);
  } else {
    show.value = false;
    document.body.classList.add('page-loaded');
    window.scrollTo(0, 0); // También si ya había cargado
  }
});
</script>

<style lang="scss" scoped>
#loader-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg, #010c18);
  
  .loader-main {
    position: relative;
    width: 120px;
    height: 50px;
    margin-bottom: 4rem;
    
    div {
      &:nth-child(2) { 
        animation: pacman-balls 1s 0s infinite linear;
      }
      &:nth-child(3) { 
        animation: pacman-balls 1s 0.33s infinite linear;
      }
      &:nth-child(4) { 
        animation: pacman-balls 1s 0.66s infinite linear;
      }
      
      &:first-of-type {
        width: 0;
        height: 0;
        border-right: 25px solid transparent;
        border-top: 25px solid #7289da;
        border-left: 25px solid #7289da;
        border-bottom: 25px solid #7289da;
        border-radius: 25px;
        animation: rotate_pacman_half_up 0.5s 0s infinite;
      }
      
      &:nth-child(2) {
        width: 0;
        height: 0;
        border-right: 25px solid transparent;
        border-top: 25px solid #7289da;
        border-left: 25px solid #7289da;
        border-bottom: 25px solid #7289da;
        border-radius: 25px;
        animation: rotate_pacman_half_down 0.5s 0s infinite;
        margin-top: -50px;
      }
      
      &:nth-child(3),
      &:nth-child(4) {
        background-color: #7289da;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 2px;
        position: absolute;
        transform: translate(0, -6.25px);
        top: 25px;
        left: 100px;
      }
    }
  }
  
  .title {
    margin: 0 0 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    
    html[data-theme="dark"] & {
      color: #b8d0ff;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }
    
    html[data-theme="light"] & {
      color: #3469b8;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  
  .description {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    
    html[data-theme="dark"] & {
      color: #c8d8e8;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    html[data-theme="light"] & {
      color: #4a5568;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  
  @keyframes pacman-balls {
    0% {
      opacity: 1;
      transform: translate(0, -6.25px);
    }
    75% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
      transform: translate(-100px, -6.25px);
    }
  }
  
  @keyframes rotate_pacman_half_up {
    0%, 100% {
      transform: rotate(270deg);
    }
    50% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes rotate_pacman_half_down {
    0%, 100% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>