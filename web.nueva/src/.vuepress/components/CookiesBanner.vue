<template>
  <div v-if="visible" class="cookie-banner-discord">
    <div class="cookie-container">
      <div class="cookie-text">
        <span class="cookie-icon">🍪</span>
        <p>
          Esta web usa <a href="/docs/legal/">cookies</a> para temas, analíticas y recursos.
          <strong>Si sigues navegando, aceptas su uso.</strong>
        </p>
      </div>
      <div class="cookie-actions">
        <button class="cookie-accept-btn" @click="accept">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  if (localStorage.getItem('cookies_aceptadas') !== 'true') {
    visible.value = true
  }
})

const accept = () => {
  localStorage.setItem('cookies_aceptadas', 'true')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner-discord {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #011221; /* Tu Deep Navy Soft */
  border-top: 2px solid #7289da; /* Blurple Discord */
  color: #ffffff;
  padding: 1rem 1.5rem;
  z-index: 2147483647 !important;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.cookie-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap; /* Permite que el botón baje si no hay sitio */
}

.cookie-text {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 250px; /* Asegura que el texto tenga un mínimo */
}

.cookie-text p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
}

.cookie-text a {
  color: #7289da;
  text-decoration: underline;
  font-weight: bold;
}

.cookie-icon {
  font-size: 1.5rem;
}

.cookie-actions {
  display: flex;
  align-items: center;
}

.cookie-accept-btn {
  background-color: #7289da;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cookie-accept-btn:hover {
  background-color: #5b6eae;
  transform: translateY(-2px);
}

/* RESPONSIVE MÓVIL */
@media (max-width: 768px) {
  .cookie-banner-discord {
    padding: 1.2rem 1rem;
  }
  
  .cookie-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .cookie-text {
    flex-direction: column;
    gap: 0.5rem;
    min-width: 100%;
  }

  .cookie-actions {
    width: 100%;
    justify-content: center;
  }

  .cookie-accept-btn {
    width: 100%; /* Botón ancho completo en móvil */
    padding: 0.8rem;
  }
}
</style>