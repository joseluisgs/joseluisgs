<template>
  <div v-if="visible" class="cookie-banner-discord">
    <div class="cookie-container">
      <div class="cookie-text">
        <span class="cookie-icon">🍪</span>
        <p>
          Utilizamos cookies para mejorar tu experiencia. Las <strong>necesarias</strong> (estado del banner y preferencia de tema) se activan siempre. 
          Las de <strong>análisis</strong> (Google Analytics) nos ayudan a mejorar el contenido. 
          Puedes consultar los detalles en nuestra <a href="/info/legal">Política de Cookies</a>.
        </p>
      </div>
      <div class="cookie-actions">
        <button class="cookie-accept-btn" @click="accept">Aceptar todas</button>
        <button class="cookie-reject-btn" @click="reject">Solo necesarias</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadGA } from '../ga-utils'

const visible = ref(false)
const GA_ID = 'G-103H05W8P8'
const CONSENT_KEY = 'cookies_consent'
const DATE_KEY = 'cookies_consent_date'
const EXPIRY_MS = 24 * 30 * 24 * 60 * 60 * 1000 // ~24 meses en ms

onMounted(() => {
  const consent = localStorage.getItem(CONSENT_KEY)
  const consentDate = localStorage.getItem(DATE_KEY)
  const now = new Date().getTime()

  // Si no hay decisión o ha caducado, mostrar banner
  if (!consent || !consentDate || (now - parseInt(consentDate) > EXPIRY_MS)) {
    visible.value = true
  }

  // Escuchar evento para mostrar banner desde fuera (footer)
  window.addEventListener('show-cookie-banner', () => {
    visible.value = true
  })
})

const saveChoice = (choice) => {
  localStorage.setItem(CONSENT_KEY, choice)
  localStorage.setItem(DATE_KEY, new Date().getTime().toString())
  visible.value = false
}

const accept = () => {
  saveChoice('accepted')
  loadGA(GA_ID)
}

const reject = () => {
  saveChoice('rejected')
}

const showBanner = () => {
  visible.value = true
}

defineExpose({ showBanner })
</script>

<style scoped>
.cookie-banner-discord {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #011221;
  border-top: 2px solid #7289da;
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
  flex-wrap: wrap;
}

.cookie-text {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 250px;
}

.cookie-text p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
}

.cookie-text strong {
  color: #7289da;
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
  gap: 10px;
}

.cookie-accept-btn {
  background-color: #7289da;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cookie-reject-btn {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #7289da;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cookie-accept-btn:hover {
  background-color: #5b6eae;
  transform: translateY(-2px);
}

.cookie-reject-btn:hover {
  background-color: rgba(114, 137, 218, 0.1);
}

@media (max-width: 768px) {
  .cookie-container {
    flex-direction: column;
    text-align: center;
  }
  .cookie-actions {
    width: 100%;
    flex-direction: column;
  }
  .cookie-accept-btn, .cookie-reject-btn {
    width: 100%;
  }
}
</style>