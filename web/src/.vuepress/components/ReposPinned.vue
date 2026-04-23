<script setup>
import { ref, onMounted } from 'vue'

const repositorios = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=joseluisgs")
    if (!response.ok) throw new Error('Error fetching repos')
    const data = await response.json()
    repositorios.value = data
  } catch (e) {
    console.error("Error fetching pinned repos:", e)
    error.value = "Error al cargar los repositorios. Intenta de nuevo más tarde."
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="github-row">
    <!-- Skeleton Screen: 6 tarjetas fantasma mientras carga -->
    <template v-if="loading">
      <div v-for="i in 6" :key="'skeleton-' + i" class="github-pinner skeleton">
        <div class="gp-container-repo">
          <div class="gp-header">
            <div class="skeleton-item icon"></div>
            <div class="skeleton-item title"></div>
          </div>
          <div class="skeleton-item desc"></div>
          <div class="skeleton-item desc short"></div>
          <div class="gp-stats">
            <div class="skeleton-item stat"></div>
            <div class="skeleton-item stat"></div>
          </div>
        </div>
      </div>
    </template>

    <div v-else-if="error" class="github-error">
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>{{ error }}</p>
    </div>

    <template v-else>
      <div v-for="repo in repositorios" class="github-pinner" :key="repo.repo" :class="{ 'loaded': !loading }">
        <div class="gp-container-repo">
          <div class="gp-header">
            <i class="fa-brands fa-github gp-icon"></i>
            <a class="gp-title" :href="repo.link" target="_blank">{{ repo.repo }}</a>
          </div>
          <p class="gp-desc">{{ repo.description }}</p>
          <div class="gp-stats">
            <span v-if="repo.language" class="gp-stat">
              <span v-if="repo.languageColor" class="language-color" :style="{ backgroundColor: repo.languageColor }"></span>
              {{ repo.language }}
            </span>
            <span v-else class="gp-stat">
              <i class="fa-solid fa-code"></i>
              Code
            </span>
            <a class="gp-stat gp-link" :href="repo.link + '/stargazers'" target="_blank">
              <i class="fa-solid fa-star"></i>
              {{ repo.stars }}
            </a>
            <a class="gp-stat gp-link" :href="repo.link + '/network/members'" target="_blank">
              <i class="fa-solid fa-code-branch"></i>
              {{ repo.forks }}
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.github-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.github-error {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #ff6b6b;
}

/* Skeleton Styles */
.skeleton {
  pointer-events: none;
}

.skeleton-item {
  background: var(--vp-c-bg-elv);
  background: linear-gradient(
    90deg,
    var(--vp-c-bg-soft) 25%,
    var(--vp-c-border) 50%,
    var(--vp-c-bg-soft) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-item.icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  border-radius: 50%;
}

.skeleton-item.title {
  width: 60%;
  height: 1.1rem;
}

.skeleton-item.desc {
  width: 100%;
  height: 0.9rem;
  margin-bottom: 0.6rem;
  margin-top: 0.5rem;
}

.skeleton-item.desc.short {
  width: 40%;
}

.skeleton-item.stat {
  width: 3rem;
  height: 0.85rem;
  margin-top: 0.5rem;
}

/* Card Styles */
.github-pinner {
  padding: 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.github-pinner:not(.skeleton) {
  opacity: 0;
  transform: translateY(20px);
}

.github-pinner.loaded {
  animation: fadeInUp 0.4s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.github-pinner:hover:not(.skeleton) {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--vp-c-accent);
}

.gp-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.gp-icon {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.gp-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-accent);
  text-decoration: none;
}

.gp-title:hover {
  text-decoration: underline;
}

.gp-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.7rem; /* Evitar CLS al cargar */
}

.gp-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.gp-stat {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.language-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.gp-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.gp-link:hover {
  color: var(--vp-c-accent);
}

@media (max-width: 640px) {
  .github-row {
    grid-template-columns: 1fr;
  }
}
</style>