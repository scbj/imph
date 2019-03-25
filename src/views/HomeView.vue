<template>
  <div class="home-view">
    <BackgroundVideo :source="videoUrl" :poster="posterUrl" />
    <BaseLogo size="small" />
    <HomeContent />
  </div>
</template>

<script>
import BackgroundVideo from '@/components/BackgroundVideo.vue'
import HomeContent from '@/components/HomeContent.vue'
import { baseUrl } from '@/http'

export default {
  name: 'HomeView',

  components: {
    BackgroundVideo,
    HomeContent
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
  grid-template-rows: auto 1fr;
  grid-template-columns: auto;
  grid-gap: 1rem;

  @media screen and (min-width: $medium) {
  grid-template-rows: 30% auto 30%;
  grid-template-columns: repeat(2, 50%);
  }

  > * {
    z-index: 2;
  }
}

.background-video {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  object-fit: cover;
  filter: brightness(36%);
  width: 100%;
  height: 100%;
  z-index: 1;

  @media screen and (min-width: $medium) {
    grid-row: 1 / 4;
    grid-column: 1 / 3;
    filter: none;
  }
}

.base-logo {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin: 32px;
  max-height: 50px;

  @media screen and (min-width: $medium) {
    margin: 44px;
    max-height: 58px;
  }
}

.home-content {
  grid-row: 2 / 3;
  grid-column: 1 / 1;
  justify-self: center;
  align-self: center;

  @media screen and (min-width: $medium) {
    grid-row: 2 / 3;
    grid-column:  1 / 3;
  }
}
</style>
