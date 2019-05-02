<template>
  <div class="player-view" @click="stop">
    <VideoPlayer :video-id="video.youTubeId" />
    <h2 class="title">
      {{ video.title }}
    </h2>
    <h3 class="artist">
      {{ video.artist }}
    </h3>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'

import VideoPlayer from '@/components/VideoPlayer'

export default {
  name: 'PlayerView',

  components: {
    VideoPlayer
  },

  computed: {
    video: sync('player/activeVideo')
  },

  created () {
    // TODO: Utiliser plutôt un middleware sur le router pour savoir si la route existe
    const retreiveVideo = () => {
      if (this.video) {
        return this.video
      }
      const categories = this.$store.get('categories')
      for (const category of categories) {
        const video = category.videos.find(video => video.youTubeId === this.$route.params.id)
        if (video) {
          return video
        }
      }
    }

    this.video = retreiveVideo()

    if (!this.video) {
      return this.$router.push({ name: '404' })
    }
    this.hackWrongScrollBehavior(false)
  },

  beforeDestroy () {
    this.hackWrongScrollBehavior(true)
  },

  methods: {
    hackWrongScrollBehavior (value) {
      const root = document.documentElement
      const offset = root.scrollTop

      document.body.style.paddingRight = value ? '' : '10px'
      root.style.setProperty('--overflow-y', value ? '' : 'hidden')
      root.style.setProperty('--overflow-offset', value ? '0px' : `-${offset}px`)
    },

    stop (event) {
      if (event.target === this.$el) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.player-view {
  background: rgba(black, 80%);
  display: grid;
  grid-template-columns: 4fr minmax(auto, 1060px) 1fr;
  grid-template-rows: 1fr auto auto 4fr;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow-y: auto;
  transform: translateY(calc(var(--overflow-offset) * -1));
}

.video-player,
.title,
.artist {
  grid-column: 2 / 3;
}

.video-player {
  grid-row: 2 / 3;
}

.title {
  grid-row: 3 / 4;
}

.artist {
  color: #08F4EF;
  grid-row: 4 / 5;
}
</style>
