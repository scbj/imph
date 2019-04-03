<template>
  <div class="home-view">
    <HomeBackground :video="backgroundUrl" :image="posterUrl" />
    <content>
      <BaseLogo size="small" />
      <CategoryList />
      <SocialLinks />
    </content>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

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
  height: 100vh;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  position: relative;

  > content {
    grid-area:  1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
  }
}
.home-background {
    grid-area:  1 / 1 / 2 / 2;
}

.home-backgrounds {
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: brightness(36%);
  width: 100%;
  height: 100%;
  z-index: 1;

  @media screen and (min-width: $medium) {
    filter: none;
  }
}

.base-logo {
  margin: 32px;
  align-self: flex-start;
  justify-self: flex-start;
  max-height: 50px;

  @media screen and (min-width: $medium) {
    margin: 44px;
    max-height: 58px;
  }
}

.home-content {
  flex-grow: 1;

  @media screen and (min-width: $medium) {
    align-self: stretch;
    justify-self: stretch;
  }
}

.social-links {
  justify-self: center;
  text-align: center;
}

.base-logo {
  margin: 32px;
  @media screen and (min-width: $medium) {
    margin: 44px;
  }
}

.social-links {
  position: relative;
  margin-bottom: 3em;
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
