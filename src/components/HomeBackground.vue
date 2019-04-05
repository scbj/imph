<template>
  <div
    v-if="mode === 'image'"
    :style="backgroundImage"
    class="home-background"
  />
  <video
    v-else
    class="home-background"
    :src="video"
    autoplay
    loop
    muted
  />
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [ responsive ],

  props: {
    video: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },

  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.image})`
      }
    },

    mode () {
      return this.lte('small') || !this.video
        ? 'image'
        : 'video'
    }
  }
}
</script>

<style lang="scss" scoped>
div.home-background {
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: cover;
  margin: -4rem;
  filter: blur(25px) brightness(25%);
}

video.home-background {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: flex;
  margin: -2rem;
  filter: brightness(25%);
}
</style>
