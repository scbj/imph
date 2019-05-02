<template>
  <div class="video-player">
    <EmbedYouTube v-model="state" :video-id="videoId" />
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'

import EmbedYouTube from '@/components/EmbedYouTube.vue'

export default {
  components: {
    EmbedYouTube
  },

  props: {
    videoId: {
      type: String,
      required: true
    }
  },

  computed: {
    state: sync('player/playbackState')
  }
}
</script>

<style lang="scss" scoped>
.video-player {
  border-radius: 12.6px;
  overflow: hidden;
}
</style>
