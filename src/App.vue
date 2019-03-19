<template>
  <div id="app">
    <template v-if="ready">
      <router-view />
    </template>
    <StartupView v-else />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import StartupView from '@/views/StartupView'

export default {
  components: {
    StartupView
  },

  data () {
    return {
      timeout: false
    }
  },

  computed: {
    hasCategories: get('hasCategories'),

    ready () {
      return this.timeout && this.hasCategories
    }
  },

  async mounted () {
    // Waiting at least 1 seconds before leave StartupView
    setTimeout(() => {
      this.timeout = true
    }, 1500)

    // Retreive the list of category
    this.$store.dispatch('listCategories')
  }
}
</script>

<style lang="scss">
@import './assets/styles/_base.scss';

$animation-easing: cubic-bezier(.165, .84, .44, 1);
$animation-duration: .6s;

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  height: 100%;

  animation:
    darken-background
    $animation-duration
    $animation-easing
    forwards;
}

// Animations
@keyframes darken-background {
  to { background: #000000 }
}
</style>
