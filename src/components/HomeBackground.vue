<template>
  <div
    v-if="lte('small') || !video"
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
    }
  }
}
</script>

<style lang="scss" scoped>
div.home-background {
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 300%;
  margin: -4rem;
  filter: blur(15px) brightness(30%);
}
</style>
