<template>
  <div class="test-font-canvas" :style="style">
    <h1>Un titre pour Imph ou IMPH</h1>
    <h2>Aftermovies et clips musicaux</h2>
    <h3>A suivre sur Instagram @imphfilm</h3>
    <p>Ceci est un titre de vidéo</p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  },

  computed: {
    style () {
      return {
        color: this.color,
        backgroundColor: this.background
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test-font-canvas {
  padding: 2rem;
}
</style>
