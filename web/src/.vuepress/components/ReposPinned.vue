<script setup>
import { ref, onMounted } from 'vue'

const repositorios = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=joseluisgs")
    const data = await response.json()
    repositorios.value = data
  } catch (error) {
    console.error("Error fetching pinned repos:", error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="github-row">
    <div v-if="loading" class="github-loading">
      <div class="loading-spinner"></div>
      <p>Cargando repositorios...</p>
    </div>

    <div v-else v-for="repo in repositorios" class="github-pinner" :key="repo.repo">
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
  </div>
</template>

<style scoped>
.github-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.github-loading {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-border);
  border-top-color: var(--vp-c-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.github-pinner {
  padding: 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.github-pinner:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--theme-color);
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
  color: var(--theme-color);
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
  color: var(--theme-color);
}

@media (max-width: 640px) {
  .github-row {
    grid-template-columns: 1fr;
  }
}
</style>
