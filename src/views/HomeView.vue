<template>
  <div class="home-view">
    <HomeBackground :video="backgroundUrl" :image="posterUrl" />
    <content>
      <BaseLogo size="small" />
      <template v-if="lte('small')">
        <h1 class="site-name">
          imph
        </h1>
        <h3 class="job">
          Réalisateur numérique
        </h3>
        <h2 class="work-label">
          projects
        </h2>
      </template>
      <CategoryList />
      <SocialLinks />
    </content>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import responsive from '@/mixins/responsive'
import HomeBackground from '@/components/HomeBackground.vue'
import CategoryList from '@/components/CategoryList.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  name: 'HomeView',

  components: {
    HomeBackground,
    CategoryList,
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

.home-view {
  padding: 2rem;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  position: relative;
  overflow: hidden;

  > content {
    grid-area:  1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}

.home-background {
    grid-area:  1 / 1 / 2 / 2;
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
  margin-top: 8em;
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

.social-links {
  align-self: center;
  text-align: center;
  position: relative;
  $margin: 4em;
  margin-top: $margin;
  margin-bottom: $margin;
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
</style>
