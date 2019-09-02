<template>
  <TransitionFade>
    <div class="home-view">
      <template v-if="lte('small')">
        <GlitchyText class="site-name">
          <h1>
            imph
          </h1>
        </GlitchyText>
        <h2 class="work-label" @click="scroll">
          réalisations
        </h2>
        <HomeFooter />
      </template>
      <CategoryList />
      <SocialLinks />
    </div>
  </TransitionFade>
</template>

<script>
import scrollToElement from 'scroll-to-element'

import responsive from '@/mixins/responsive'
import CategoryList from '@/components/CategoryList.vue'
import GlitchyText from '@/components/GlitchyText.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import TransitionFade from '@/components/TransitionFade'

export default {
  name: 'HomeView',

  components: {
    CategoryList,
    GlitchyText,
    HomeFooter,
    SocialLinks,
    TransitionFade
  },

  mixins: [ responsive ],

  mounted () {
    this.$store.set('fx/particlesColor', { r: 255, g: 255, b: 255 })
  },

  methods: {
    scroll (event) {
      event.target && scrollToElement(event.target, {
        offset: -50,
        ease: 'out-expo',
        duration: 750
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

$easing: cubic-bezier(.215, .61, .355, 1);

$content-padding: 2rem;

.home-view {
  padding: $content-padding;
  padding-top: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "site-name"
    "social-links"
    "work-label"
    "category-list"
    "footer";
  justify-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: $medium) {
    grid-template-areas:
      "category-list"
      "social-links";
    min-height: 100vh;
  }

  & > * {
    z-index: 10;
  }
}

.site-name,
.work-label {
  align-self: center;
}

.site-name {
  grid-area: site-name;
  margin-top: 8rem;
  margin-bottom: 2em;
}

.work-label {
  grid-area: work-label;
  margin-top: 6em;
  position: relative;
  user-select: none;
  cursor: pointer;
}

.category-list {
  grid-area: category-list;
  justify-self: stretch;
  margin-top: 3rem;
  margin-bottom: 6rem;

  @media screen and (min-width: $medium) {
    margin: 0;
  }
}

.social-links {
  grid-area: social-links;
  align-self: center;
  margin-top: 2em;
  @media screen and (min-width: $medium) {
    opacity: .3;
    transform: translateY(.4em);
    transition: all .2s $easing;
  }

  &:hover {
    opacity: 1;
    transform: translateY(0);
    transition: all .2s $easing;
  }
}

.home-footer {
  grid-area: footer;
  margin: -$content-padding;
  justify-self: stretch;
}
</style>
