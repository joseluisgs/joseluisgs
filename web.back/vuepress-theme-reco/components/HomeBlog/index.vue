<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div>
        <div class="header-content">
          <div class="left-header">
            <div class="image">
              <img src="img/web01.svg" alt="" />
            </div>
          </div>
          <div class="right-header">
            <h1 class="name">👋 Hola, soy <span>José Luis González</span></h1>
            <h2 class="subname">Enseñando el arte del desarrollo de software día a día 👨🏻‍💻</h2>
            <p>🎓 Soy doctor en desarrollo de software, profesor, investigador y desarrollador.</p>
            <p>
              ⚡ Me siento orgulloso de ser Kotlin Trainer certified by Jetbrains, Github Campus
              Advisor y Gitkraken Ambassador.
            </p>
            <p>📌 Me puedes encontrar en el IES Luis Vives de Leganés (Madrid).</p>
            <!-- chevron -->
            <a href="#homeBlog">
              <div class="chevron-container">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- chevron -->
    <div id="homeBlog"></div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <div class="info-wrapper">
          <PersonalInfo />
          <h4><reco-icon icon="reco-category" /> {{ $recoLocales.category }}</h4>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ backgroundColor: getOneColor() }">{{
                  item.pages.length
                }}</span>
              </router-link>
            </li>
          </ul>
          <hr />
          <h4 v-if="$tags.list.length !== 0">
            <reco-icon icon="reco-tag" /> {{ $recoLocales.tag }}
          </h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0">
            <reco-icon icon="reco-friend" /> {{ $recoLocales.friendLink }}
          </h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom />
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive, computed, onMounted } from 'vue-demi';
import TagList from '@theme/components/TagList';
import FriendLink from '@theme/components/FriendLink';
import NoteAbstract from '@theme/components/NoteAbstract';
import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components';
import PersonalInfo from '@theme/components/PersonalInfo';
import { getOneColor } from '@theme/helpers/other';
import { useInstance } from '@theme/helpers/composable';

export default defineComponent({
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, RecoIcon },
  setup(props, ctx) {
    const instance = useInstance();

    const state = reactive({
      recoShow: false,
      heroHeight: 0,
    });

    const recoShowModule = computed(() => instance && instance.$parent.recoShowModule);

    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {});

    const bgImageStyle = computed(() => {
      const url = instance.$frontmatter.bgImage
        ? instance.$withBase(instance.$frontmatter.bgImage)
        : require('../../images/bg.svg');

      const initBgImageStyle = {
        textAlign: 'center',
        overflow: 'hidden',
        background: `url(${url}) center/cover no-repeat`,
      };

      const { bgImageStyle } = instance.$frontmatter;

      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle;
    });

    onMounted(() => {
      state.heroHeight = document.querySelector('.hero').clientHeight;
      state.recoShow = true;
    });

    return { recoShowModule, heroImageStyle, bgImageStyle, ...toRefs(state), getOneColor };
  },
  methods: {
    paginationChange(page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight);
      }, 100);
    },
    getPagesByTags(tagInfo) {
      this.$router.push({ path: tagInfo.path });
    },
  },
});
</script>

<style lang="stylus">
/* chevron */
.chevron-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
}

.chevron {
  position: absolute;
  width: 0.5rem * 3.5;
  height: 0.5rem * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before, .chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #4586ad;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }

  33.3% {
    opacity: 1;
    transform: translateY(0.5rem * 3.8);
  }

  66.6% {
    opacity: 1;
    transform: translateY(0.5rem * 5.2);
  }

  100% {
    opacity: 0;
    transform: translateY(0.5rem * 8) scale(0.5);
  }
}

.header-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  max-width: 2500px;
}

.header-content .left-header {
  display: flex;
  align-items: center;
  position: relative;
  padding: 3rem;
}

.header-content .left-header .image {
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-in-out;
}

.header-content .left-header .image img {
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in-out;
}

.header-content .right-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

.header-content .right-header .name {
  font-size: 2.75rem;
  font-weight: bold;
}

.header-content .right-header .subname {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--text-color-frase);
  margin: 0.75rem 0;
}

.header-content .right-header .name span {
  /* color: var(--text-color-nombre); */
  background: var(--text-color-nombre-bg);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.header-content .right-header p {
  margin: 0.5rem 0;
  line-height: 1.75rem;
  text-align: left;
  font-size: 1.2rem;
}

.home-blog {
  padding: 0;
  margin: 0px auto;

  #homeBlog {
    left: 0;
    bottom: 0px;
    position: absolute;
  }

  .hero {
    margin: $navbarHeight auto 0;
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-img {
      max-width: 300px;
      margin: 0 auto 1rem;
    }

    h1 {
      display: block;
      margin: 0 auto 0.5rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 0.5rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }

  .home-blog-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    padding: 0 20px;
    max-width: $homePageWidth;

    .blog-list {
      flex: auto;
      width: 0;

      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .info-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      overflow: hidden;
      transition: all 0.3s;
      margin-left: 15px;
      flex: 0 0 300px;
      height: auto;
      box-shadow: var(--box-shadow);
      border-radius: $borderRadius;
      box-sizing: border-box;
      padding: 0 15px;
      background: var(--background-color);

      &:hover {
        box-shadow: var(--box-shadow-hover);
      }

      h4 {
        color: var(--text-color);
      }

      .category-wrapper {
        list-style: none;
        padding-left: 0;

        .category-item {
          margin-bottom: 0.4rem;
          padding: 0.4rem 0.8rem;
          transition: all 0.5s;
          border-radius: $borderRadius;
          box-shadow: var(--box-shadow);
          background-color: var(--background-color);

          &:hover {
            transform: scale(1.04);

            a {
              color: $accentColor;
            }
          }

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-color);

            .post-num {
              width: 1.6rem;
              height: 1.6rem;
              text-align: center;
              line-height: 1.6rem;
              border-radius: $borderRadius;
              background: #eee;
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

/* Para ipad y narroe desktop */
@media (max-width: $MQMobile) {
  .header-content {
    grid-template-columns: none;
    grid-template-rows: 1fr 4fr;
    height: 90vh;
  }

  .header-content .left-header {
    align-items: center;
    padding: 0rem;
    height: 475px;
  }

  .header-content .left-header .image {
    max-height: 475px;
  }

  .header-content .right-header {
    padding: 1rem 3rem;
    align-self: start;
  }

  .home-blog {
    .hero {
      height: 475%;

      img {
        max-height: 500px;
      }

      h1 {
        margin: 0 auto 1.8rem;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

/* Móviles */
@media (max-width: $MQMobileNarrow) {
  .header-content {
    grid-template-columns: none;
    grid-template-rows: 1fr 4fr;
    height: 90vh;
  }

  .header-content .left-header {
    align-items: center;
    padding: 0rem;
    height: 340px;
  }

  .header-content .left-header .image {
    max-height: 340px;
  }

  .header-content .right-header {
    padding: 0.5rem 0.75rem;
    align-self: start;
  }

  .header-content .right-header .name {
    font-size: 1.75rem;
  }

  .header-content .right-header .subname {
    font-size: 1.2rem;
  }

  .header-content .right-header p {
    margin: 0.25rem;
    line-height: 1.2rem;
    font-size: 1rem;
  }

  .home-blog {
    .hero {
      height: 100%;

      img {
        max-height: 340px;
      }

      h1 {
        margin: 0 auto 0.5rem;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

@media (min-width: 2000px) {
  .header-content .right-header .name {
    font-size: 4.75rem;
    font-weight: bold;
  }

  .header-content .right-header .subname {
    font-size: 3.4rem;
    font-weight: bold;
    margin: 0.75rem 0;
  }

  .header-content .right-header p {
    margin: 1.5rem 0;
    line-height: 2.75rem;
    text-align: left;
    font-size: 2.2rem;
  }
}
</style>
