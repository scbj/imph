<script>
import GlitchEffect from '@/components/GlitchEffect'

import { lowerCase } from '@/filters/string'

export default {
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

  render (h) {
    return (
      <GlitchEffect
        class="category-item"
        imageUrl={ this.imageUrl }
        title={ lowerCase(this.category.label) }
        description={ `${this.videoCount} vidéos` }
        color={ this.category.color } />
    )
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
