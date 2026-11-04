<script setup lang="ts">
import { ref, onMounted } from "vue";

/** Respuesta cruda de la API de pinned repos */
interface PinnedApiLanguage {
  name?: string;
  color?: string | null;
}

interface PinnedApiRepo {
  /** nombre del repositorio */
  name: string;
  /** URL completa del repositorio */
  repo: string;
  description?: string | null;
  language?: PinnedApiLanguage | null;
  stars?: number;
  forks?: number;
}

interface PinnedApiResponse {
  isError?: boolean;
  statusMessage?: string;
  statusCode?: number;
  response?: PinnedApiRepo[];
}

/** Formato interno que consume la plantilla */
interface Repo {
  /** nombre (clave de la lista y título) */
  repo: string;
  /** URL del repositorio */
  link: string;
  description: string;
  language: string | null;
  languageColor: string | null;
  stars: number;
  forks: number;
}

const API_URL = "https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=joseluisgs";
const CACHE_KEY = "joseluisgs:pinned-repos:v1";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 h: los datos cambian en días y así solo se pide a la API 1 vez por visitante al día (límite 10/30 s por IP)
const TIMEOUT_MS = 8000;

/**
 * Último recurso: los repos fijados del perfil.
 *
 * Vive dentro del bundle (y el Service Worker la precachea), así que se
 * muestra aunque la API de terceros muera —como pasó con la de Deno—,
 * haya rate limit (429) o no haya conexión.
 *
 * Actualízala cuando cambies los repos fijados en GitHub.
 */
const FALLBACK: Repo[] = [
  {
    repo: "Programacion-00-2026-2027",
    link: "https://github.com/joseluisgs/Programacion-00-2026-2027",
    description: "Programación. 1DAW. Presentación. Curso 2026-2027.",
    language: null,
    languageColor: null,
    stars: 4,
    forks: 0,
  },
  {
    repo: "EntornosDesarrollo-00-2026-2027",
    link: "https://github.com/joseluisgs/EntornosDesarrollo-00-2026-2027",
    description: "Entornos de Desarrollo. 1DAW. Presentación. Curso 2026-2027",
    language: null,
    languageColor: null,
    stars: 5,
    forks: 0,
  },
  {
    repo: "DesarrolloWebEntornosServidor-00-2026-2027",
    link: "https://github.com/joseluisgs/DesarrolloWebEntornosServidor-00-2026-2027",
    description:
      "Desarrollo Web en Entornos Servidor. 2DAW. Presentación. Curso 2026-2027",
    language: null,
    languageColor: null,
    stars: 7,
    forks: 2,
  },
  {
    repo: "TiendaDawApi-NetCore",
    link: "https://github.com/joseluisgs/TiendaDawApi-NetCore",
    description:
      "TiendaApi-NetCore. Ejemplo de Apis para 2DAW Desarrollo Web en Entornos Servidor. Programación de servicios y apps web en C#/.NET",
    language: "C#",
    languageColor: "#7355dd",
    stars: 12,
    forks: 0,
  },
  {
    repo: "TiendaDawWeb-NetCore",
    link: "https://github.com/joseluisgs/TiendaDawWeb-NetCore",
    description:
      "WalaDawWeb-NetCore. Ejemplo de Web dinámica para 2DAW Desarrollo Web en Entornos Servidor. Desarrollo de Páginas Web Dinámicas en C#/.NET",
    language: "C#",
    languageColor: "#7355dd",
    stars: 6,
    forks: 1,
  },
  {
    repo: "TiendaDawApi-Cqrs-MediatR-NetCore",
    link: "https://github.com/joseluisgs/TiendaDawApi-Cqrs-MediatR-NetCore",
    description:
      "TiendaDawApi-Cqrs-MediatR-NetCore. Ejemplo de Apis para 2DAW Desarrollo Web en Entornos Servidor. Implementación de CQRS y MediatR en C#/.NET",
    language: "C#",
    languageColor: "#7355dd",
    stars: 6,
    forks: 0,
  },
];

const repositorios = ref<Repo[]>([]);
const loading = ref(true);

/** Convierte el formato de la API al formato interno de la plantilla */
function mapear(raw: PinnedApiRepo): Repo {
  return {
    repo: raw.name,
    link: raw.repo,
    description: raw.description ?? "",
    language: raw.language?.name || null,
    languageColor: raw.language?.color ?? null,
    stars: raw.stars ?? 0,
    forks: raw.forks ?? 0,
  };
}

function leerCache(): { datos: Repo[]; fecha: number } | null {
  try {
    const bruto = localStorage.getItem(CACHE_KEY);
    if (!bruto) return null;
    const dato = JSON.parse(bruto) as { datos: Repo[]; fecha: number };
    return Array.isArray(dato.datos) && dato.datos.length > 0 ? dato : null;
  } catch {
    return null;
  }
}

function guardarCache(datos: Repo[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ datos, fecha: Date.now() }));
  } catch {
    // Safari en modo privado / almacenamiento lleno: sin caché, no es un error
  }
}

/** Llamada a la API con timeout. Lanza si algo va mal. */
function obtenerApi(): Promise<Repo[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  return fetch(API_URL, {
    signal: controller.signal,
    headers: { Accept: "application/json" },
  })
    .then(async (resposta) => {
      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      const datos = (await resposta.json()) as PinnedApiResponse;
      if (datos.isError || !Array.isArray(datos.response) || datos.response.length === 0) {
        throw new Error(datos.statusMessage || "Respuesta vacía de la API");
      }
      return datos.response.map(mapear);
    })
    .finally(() => clearTimeout(timer));
}

onMounted(async () => {
  const cache = leerCache();

  // Caché reciente: nada que pedir a la red
  if (cache && Date.now() - cache.fecha < CACHE_TTL) {
    repositorios.value = cache.datos;
    loading.value = false;
    return;
  }

  try {
    const datos = await obtenerApi();
    repositorios.value = datos;
    guardarCache(datos);
  } catch (e) {
    // 1) último dato real que se cargó, 2) lista estática: nunca error en pantalla
    console.warn("[ReposPinned] API no disponible, mostrando respaldo:", e);
    repositorios.value = cache?.datos ?? FALLBACK;
  } finally {
    // Seguridad extra: la sección jamás se queda vacía
    if (repositorios.value.length === 0) repositorios.value = FALLBACK;
    loading.value = false;
  }
});
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

    <template v-else>
      <div
        v-for="repo in repositorios"
        class="github-pinner"
        :key="repo.repo"
        :class="{ loaded: !loading }"
      >
        <div class="gp-container-repo">
          <div class="gp-header">
            <i class="fa-brands fa-github gp-icon"></i>
            <a class="gp-title" :href="repo.link" target="_blank" rel="noopener">{{
              repo.repo
            }}</a>
          </div>
          <p class="gp-desc">{{ repo.description }}</p>
          <div class="gp-stats">
            <span v-if="repo.language" class="gp-stat">
              <span
                v-if="repo.languageColor"
                class="language-color"
                :style="{ backgroundColor: repo.languageColor }"
              ></span>
              {{ repo.language }}
            </span>
            <span v-else class="gp-stat">
              <i class="fa-solid fa-code"></i>
              Code
            </span>
            <a class="gp-stat gp-link" :href="repo.link + '/stargazers'" target="_blank" rel="noopener">
              <i class="fa-solid fa-star"></i>
              {{ repo.stars }}
            </a>
            <a
              class="gp-stat gp-link"
              :href="repo.link + '/network/members'"
              target="_blank"
              rel="noopener"
            >
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
