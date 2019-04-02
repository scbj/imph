<template>
  <div class="home-view">
    <BackgroundVideo :source="backgroundUrl" :poster="posterUrl" />
    <content>
      <BaseLogo size="small" />
      <HomeContent />
      <SocialLinks />
    </content>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import BackgroundVideo from '@/components/BackgroundVideo.vue'
import HomeContent from '@/components/HomeContent.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  name: 'HomeView',

  components: {
    BackgroundVideo,
    HomeContent,
    SocialLinks
  },

  data () {
    return {
      posterUrl: ''
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
  }
}

.background-video {
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
  opacity: .3;
  margin-bottom: 67px;
  transform: translateY(.4em);
  transition: all .2s $easing .5s;
  @media screen and (min-width: $extraLarge) {
    margin: 92px;
  }

  &:hover {
    opacity: 1;
    transform: translateY(0);
    transition: all .2s $easing;
  }
}
</style>
