<template>
  <GlitchEffect
    class="category-item"
    :image-url="imageUrl"
    :title="category.label | lowerCase"
    :description="`${videoCount} vidéos`"
    :color="category.color"
    @mouseover.native="playVideo()"
    @click.native="navigate()"
  />
</template>

<script>
import GlitchEffect from '@/components/GlitchEffect'

import { lowerCase } from '@/filters/string'

export default {
  components: {
    GlitchEffect
  },

  filters: { lowerCase },

  props: {
    category: {
      type: Object,
      required: true
    }
  },

  computed: {
    imageUrl () {
      return `${this.category.thumbnail.url}?h=500`
    },
    videoCount () {
      return this.category.videos && this.category.videos.length
    }
  },

  methods: {
    playVideo () {
      const video = this.category.backgroundVideo.url
      this.$store.set('backgroundMedia/video', video)
    },
    navigate () {
      this.$store.set('backgroundMedia/video', null)
      this.$router.push({
        name: 'videos',
        params: { category: this.category.name }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-item {
  user-select: none;
  cursor: pointer;
  $margin: 2rem;
  margin: $margin 0;

  @media screen and (min-width: 600px) {
    margin: $margin;
  }
}
</style>
