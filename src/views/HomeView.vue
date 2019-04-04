<template>
  <div class="home-view">
    <HomeBackground :video="backgroundUrl" :image="posterUrl" />
    <BaseLogo size="small" />
    <h1 class="site-name">
      imph
    </h1>
    <h3 class="job">
      Réalisateur numérique
    </h3>
    <SocialLinks />
    <h2 class="work-label">
      réalisations
    </h2>
    <CategoryList />
    <HomeFooter />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import responsive from '@/mixins/responsive'
import HomeBackground from '@/components/HomeBackground.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import CategoryList from '@/components/CategoryList.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  name: 'HomeView',

  components: {
    CategoryList,
    HomeBackground,
    HomeFooter,
    SocialLinks
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
      return this.activeCategory && this.activeCategory.backgroundVideoUrl
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
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  justify-items: center;
  position: relative;
  overflow: hidden;
}

.home-background {
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  // justify-self: stretch;
  // align-self: stretch;
  width: 100%;
  height: 100%;
}

.base-logo {
  align-self: flex-start;
  justify-self: flex-start;
}

.site-name,
.job,
.work-label {
  align-self: center;
}

.job {
  opacity: .87;
}

.site-name {
  margin-top: 8rem;
}

.work-label {
  margin-top: 6em;
  margin-bottom: 1em;
  position: relative;

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
  }
}

.category-list {
  justify-self: stretch;
}

.social-links {
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
  margin: -$content-padding;
  margin-top: 6rem;
  justify-self: stretch;
}
</style>
