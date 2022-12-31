<template>
  <div class="footer-wrapper">
    <!-- <span>
      <reco-icon icon="reco-theme" />
      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>
    </span> -->
    <!-- autor -->
    <span>
      <span class="iconify-inline iconfont" data-icon="fluent:code-circle-20-filled"></span>
      <a href="/docs/info/personal/">
        <span v-if="$themeConfig.author || $site.title"
          >{{ $themeConfig.author || $site.title }}
          <!-- <span v-if="$themeConfig.startYear && $themeConfig.startYear != new Date().getFullYear()"
          >{{ $themeConfig.startYear }} -
        </span> --> </span
        >&nbsp;
        <span>
          {{ new Date().getFullYear() }}
        </span>
      </a>
    </span>

    <span>
      <!-- Redes sociales -->
      <a target="blank" href="https://github.com/joseluisgs"
        ><span class="iconify-inline iconfont" data-icon="mdi:github"></span
      ></a>
      <a target="blank" href="https://twitter.com/JoseLuisGS_"
        ><span class="iconify-inline iconfont" data-icon="mdi:twitter"></span
      ></a>
      <a target="blank" href="https://linkedin.com/in/joseluisgonsan"
        ><span class="iconify-inline iconfont" data-icon="mdi:linkedin"></span
      ></a>
      <a target="blank" href="https://g.dev/joseluisgs"
        ><span class="iconify-inline iconfont" data-icon="raphael:code"></span
      ></a>
      <a target="blank" href="https://discordapp.com/users/joseluisgs#3560"
        ><span class="iconify-inline iconfont" data-icon="ic:baseline-discord"></span
      ></a>
      <a target="blank" href="https://www.youtube.com/@joseluisgs"
        ><span class="iconify-inline iconfont" data-icon="mdi:youtube"></span
      ></a>
    </span>

    <!-- tecnologias y cookies -->
    <span>
      <span v-if="$frontmatter.home">
        <!-- <reco-icon icon="reco-api" /> -->
        <a target="blank" href="https://vuejs.org/">
          <span class="iconify-inline iconfont" data-icon="mdi:vuejs"></span
        ></a>
        /
        <a target="blank" href="https://vuepress.vuejs.org/"
          ><span class="iconify-inline iconfont" data-icon="mdi:language-markdown"></span
        ></a>
      </span>
      &nbsp;&nbsp;&nbsp;
      <span v-if="$frontmatter.home">
        <a href="/docs/legal/"
          ><span class="iconify-inline iconfont" data-icon="fluent:cookies-20-filled"></span
        ></a>
      </span>
      <!-- Versión dela web -->
      <!-- <span v-if="$themeConfig.record && $frontmatter.home">
        <span class="iconify-inline iconfont" data-icon="wpf:security-checked"></span>
        <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
      </span> -->
    </span>
    <!-- <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="" />
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false" /> -->
  </div>
</template>

<script>
import { defineComponent, computed } from "vue-demi";
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import { version } from "../package.json";
import { useInstance } from "@theme/helpers/composable";

export default defineComponent({
  components: { RecoIcon },
  setup(props, ctx) {
    const instance = useInstance();
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig },
      } = instance;

      const vc = valineLocalConfig || valineConfig;

      return vc && vc.visitor != false;
    });
    return { version, showAccessNumber };
  },
});
</script>

<style lang="stylus" scoped>
.footer-wrapper {
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: lighten($textColor, 25%);

  .iconfont {
    font-size: 1rem;
  }

  a {
    font-size: 0.9rem;
  }

  > span {
    margin-left: 1rem;

    > i {
      margin-right: 0.5rem;
    }
  }

  .cyber-security {
    img {
      margin-right: 0.5rem;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }

    a {
      vertical-align: middle;
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    text-align: left !important;

    > span {
      display: block;
      margin-left: 0;
      line-height: 2rem;
    }
  }
}
</style>
