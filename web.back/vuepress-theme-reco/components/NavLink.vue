<template>
  <router-link class="nav-link" :to="link" v-if="!isExternal(link)" :exact="exact">
    <reco-icon :icon="`${item.icon}`" />
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <!-- <span class="iconify-inline" data-icon="fluent:cookies-20-filled"></span> -->
    <i class="iconify-inline iconfont" :data-icon="item.icon" />
    <!-- <reco-icon :icon="`${item.icon}`" /> -->
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script>
import { defineComponent, computed, toRefs } from "vue-demi";
import { isExternal, isMailto, isTel, ensureExt } from "@theme/helpers/utils";
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import { useInstance } from "@theme/helpers/composable";

export default defineComponent({
  components: { RecoIcon },

  props: {
    item: {
      required: true,
    },
  },

  setup(props, ctx) {
    const instance = useInstance();

    const { item } = toRefs(props);

    const link = computed(() => ensureExt(item.value.link));

    const exact = computed(() => {
      if (instance.$site.locales) {
        return Object.keys(instance.$site.locales).some((rootLink) => rootLink === link.value);
      }
      return link.value === "/";
    });

    return { link, exact, isExternal, isMailto, isTel };
  },
});
</script>

<style lang="stylus" scoped>
.iconfont {
  color: var(--text-color-sub);
}
</style>
