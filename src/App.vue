<template>
  <div id="app">
    <TransitionFade>
      <template v-if="ready">
        <router-view />
      </template>
      <StartupView v-else />
    </TransitionFade>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import StartupView from '@/views/StartupView'
import TransitionFade from '@/components/TransitionFade'

export default {
  components: {
    StartupView,
    TransitionFade
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
    // Waiting at least 1 seconds before allow leaving StartupView
    setTimeout(() => {
      this.timeout = true
    }, 1500)

    if (process.env.NODE_ENV === 'development') {
      // New line pass it to true directly for development purpose (speed up workflow)
      this.timeout = true
    }

    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style lang="scss">
@import './assets/styles/_base.scss';

$animation-easing: cubic-bezier(.165, .84, .44, 1);
$animation-duration: .6s;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  // min-height: 100vh;

  animation:
    darken-background
    $animation-duration
    $animation-easing
    forwards;
}

::selection {
  background: rgba(white, 0.996);
  color: black;
}

// Animations
@keyframes darken-background {
  to { background: #000000 }
}
</style>
