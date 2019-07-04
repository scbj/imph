<template>
  <TransitionFade>
    <div class="home-view">
      <template v-if="lte('small')">
        <GlitchyText class="site-name">
          <h1>
            imph
          </h1>
        </GlitchyText>
        <h3 class="job">
          Réalisateur numérique
        </h3>
        <h2 class="work-label" @click="scroll">
          réalisations
        </h2>
        <HomeFooter />
      </template>
      <HomeBackground :video="backgroundUrl" :image="posterUrl" />
      <BaseLogo size="small" />
      <CategoryList />
      <SocialLinks />
    </div>
  </TransitionFade>
</template>

<script>
import { get } from 'vuex-pathify'
import scrollToElement from 'scroll-to-element'

import responsive from '@/mixins/responsive'
import CategoryList from '@/components/CategoryList.vue'
import GlitchyText from '@/components/GlitchyText.vue'
import HomeBackground from '@/components/HomeBackground.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import TransitionFade from '@/components/TransitionFade'

export default {
  name: 'HomeView',

  components: {
    CategoryList,
    GlitchyText,
    HomeBackground,
    HomeFooter,
    SocialLinks,
    TransitionFade
  },

  mixins: [ responsive ],

  data () {
    return {
      posterUrl: 'https://images.ctfassets.net/1y3017a9dcjq/1gJUo39HxZx5sANKVMqnUJ/fbf85a503fee92ea59b9225b04300b13/audience.jpg?h=500'
    }
  },

  computed: {
    activeCategory: get('home/activeCategory'),

    backgroundUrl () {
      return this.activeCategory && this.activeCategory.backgroundVideo.url
    }
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "logo"
    "site-name"
    "job"
    "social-links"
    "work-label"
    "category-list"
    "footer";
  justify-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: $medium) {
    grid-template-areas:
      "logo"
      "category-list"
      "social-links";
    min-height: 100vh;
  }

  & > * {
    z-index: 10;
  }
}

.home-background {
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  justify-self: stretch;
  z-index: 0;
}

.base-logo {
  grid-area: logo;
  align-self: flex-start;
  justify-self: flex-start;
}

.site-name,
.job,
.work-label {
  align-self: center;
}

.job {
  grid-area: job;
  opacity: .87;
}

.site-name {
  grid-area: site-name;
  margin-top: 8rem;
}

.work-label {
  grid-area: work-label;
  margin-top: 6em;
  position: relative;
  user-select: none;
  cursor: pointer;

  &::after {
    background: #08F4EF;
    border-radius: 1px;
    content: "";
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.3em;
    transform-origin: 50% 50%;
    transform: rotateZ(-2deg);
    transition: transform .2s cubic-bezier(.215, .61, .355, 1);
  }

  @media screen and (min-width: $medium) {
    transition: transform .26s cubic-bezier(.215, .61, .355, 1);

    &:hover {
      transform: scale(1.05);

      &::after {
        transform: rotateZ(0) scaleY(1.8) scaleX(0.4);
      }
    }
  }

}

.category-list {
  grid-area: category-list;
  justify-self: stretch;
  margin-top: 6rem;
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
