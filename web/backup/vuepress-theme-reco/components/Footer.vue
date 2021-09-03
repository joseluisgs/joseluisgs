<template>
  <div class="footer-wrapper">
    <!-- <span>
      <reco-icon icon="reco-theme" />
      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>
    </span> -->
    <span v-if="$frontmatter.home">
      <reco-icon icon="reco-api" />
      <a target="blank" href="https://vuejs.org/">Vue.js</a> &
      <a target="blank" href="https://vuepress.vuejs.org/">VuePress</a>
    </span>
    <span v-if="$themeConfig.record && $frontmatter.home">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <reco-icon icon="reco-copyright" />
      <a href="/info/personal/">
        <span v-if="$themeConfig.author || $site.title">{{
          $themeConfig.author || $site.title
        }}</span>
        &nbsp;&nbsp;
        <span
          v-if="
            $themeConfig.startYear &&
            $themeConfig.startYear != new Date().getFullYear()
          "
          >{{ $themeConfig.startYear }} -
        </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <span>
      <a target="blank" href="https://github.com/joseluisgs"><reco-icon icon="reco-github" /></a>
      <a target="blank" href="https://twitter.com/joseluisgonsan"><reco-icon icon="reco-twitter" /></a>
      <a target="blank" href="www.linkedin.com/in/joseluisgonsan"><reco-icon icon="reco-linkedin" /></a>
    </span>
    <span v-if="$frontmatter.home">
      <reco-icon icon="reco-document" />
      <a href="/legal/">Cookies</a>
    </span>
    <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img
        src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
        alt=""
      />
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{
        $themeConfig.cyberSecurityRecord
      }}</a>
    </p>
    <Comments :isShowComments="false" />
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import { version } from "../package.json";
export default defineComponent({
  components: { RecoIcon },
  setup(props, ctx) {
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = ctx.root;

      const vc = valineLocalConfig || valineConfig;

      return vc && vc.visitor != false;
    });
    return { version, showAccessNumber };
  }
});
</script>

<style lang="stylus" scoped>
.footer-wrapper {
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: lighten($textColor, 25%);

  a {
    font-size: 14px;
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
