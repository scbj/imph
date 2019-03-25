<template>
  <div class="home-view">
    <BackgroundVideo :source="videoUrl" :poster="posterUrl" />
    <BaseLogo />
  </div>
</template>

<script>
import BackgroundVideo from '@/components/BackgroundVideo.vue'
import { baseUrl } from '@/http'

export default {
  name: 'HomeView',

  components: {
    BackgroundVideo
  },

  data () {
    return {
      videoUrl: `${baseUrl}/video/2`,
      posterUrl: `${baseUrl}/video/2`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.home-view {
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, 50%);
  grid-gap: 1rem;
}

.background-video {
  grid-row: 1 / 4;
  grid-column: 1 / 3;
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
  z-index: 2;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  margin: 32px;
  max-height: 50px;

  @media screen and (min-width: $medium) {
    margin: 44px;
    max-height: 58px;
  }
}
</style>
