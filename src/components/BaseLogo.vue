<template>
  <img
    class="base-logo"
    :src="source"
    alt="Imph logo"
  >
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'original'
    }
  },

  computed: {
    source () {
      switch (this.source) {
        case 'original': return '@/assets/images/logo-500x610.png'
        case 'small': return '@/assets/images/logo-60x49.png'
        default: return '@/assets/images/logo-500x610.png'
      }
    }
  }
}
</script>
