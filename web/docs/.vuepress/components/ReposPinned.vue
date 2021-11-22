<template>
  <div class="github-row">
    <div v-for="repo in repositorios" class="github-pinner" :key=repo.link>
      <div id="gp-container-repo">
        <i class="iconfont reco-github gp-icon"></i><a class="gp-title" :href="'https://github.com/joseluisgs/'+ repo.repo" target="_blank">{{repo.repo}}</a>
        <p class="gp-desc">{{repo.description}}</p>
        <div id="gp-stats">
          <p class="gp-stat"><i class="iconfont reco-api gp-language"></i>{{repo.language}}</p>
          <a class="gp-stat gp-link" :href="'https://github.com/joseluisgs/'+ repo.repo +'/stargazers'" target="_blank">
            <svg class="gp-octicon" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path>
            </svg>
            {{repo.stars}}
          </a>
          <a class="gp-stat gp-link" :href="'https://github.com/joseluisgs/'+ repo.repo +'/network/members'" target="_blank">
            <svg class="gp-octicon" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10">
              <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
            </svg>
            {{repo.forks}}
          </a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: 'ReposPinned',
  data: () => ({
    repositorios: null,
  }),

  // Utilizo la api fecth que es nativa y me ahorro instalar axios, pues solo es un GET
  // Mounted por SSR
  async mounted() {
    // gh-pinned-repos.egoist.sh/
    
    const url = 'https://gh-pinned-repos.egoist.sh/?username=joseluisgs';
    try {
      const response = await axios.get(url);
      this.repositorios = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style>

.github-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.github-pinner {
  padding: 15px;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  height: auto;
}



/* MARK: - Repo Styling */
.github-pinner #gp-container-repo {
  position: relative;
  height: inherit;
}

.github-pinner #gp-container-repo .gp-title {
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600 !important;
}

.github-pinner #gp-container-repo .gp-icon {
  font-size: 1.1rem;
  font-weight: 600 !important;
  margin-right: 0.3rem;
}

.github-pinner #gp-container-repo .gp-title:hover {
  text-decoration: underline;
}

.github-pinner #gp-container-repo .gp-desc {
  margin-top: 5px;
  color: var(--text-color);
  font-size: 12px !important;
}

.github-pinner #gp-container-repo #gp-stats {
}

.github-pinner #gp-container-repo #gp-stats .gp-stat {
  text-decoration: none;
  color: var(--text-color-sub);
  font-size: 0.8rem !important;
  display: inline-block;
  margin: 0 0;
  margin-left: 15px;
}

.github-pinner #gp-container-repo #gp-stats .gp-stat:first-child {
  margin-left: 0px;
}

.github-pinner #gp-container-repo #gp-stats .gp-stat .gp-octicon {
  vertical-align: text-bottom;
  display: inline-block;
  fill: currentColor;
  margin-right: 3px;
}

.github-pinner #gp-container-repo #gp-stats .gp-stat .gp-language{
  display: inline-block;
  fill: currentColor;
  margin-right: 5px;
}

.github-pinner #gp-container-repo #gp-stats .gp-stat.gp-link {
  cursor: pointer;

}

.github-pinner #gp-container-repo #gp-stats .gp-stat.gp-link:hover {
  color: #4586ad !important;
  text-decoration: none;
}

@media (max-width: 540px) {
  .github-row {
    display: grid;
    grid-template-columns: 1fr;
    }
}

</style>