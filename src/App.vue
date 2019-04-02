<template>
  <div id="app">
    <transition name="fade">
      <template v-if="ready">
        <router-view />
      </template>
      <StartupView v-else />
    </transition>
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
  min-height: 100vh;
  overflow: hidden;

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

.theme-light {
  background:#ffffff;
  color: black;

  ::selection {
    background: rgba(black, 0.996);
    color: white;
  }
}

// Animations
@keyframes darken-background {
  to { background: #000000 }
}

.fade-enter-active,
.fade-leave-active  {
  transition: opacity .3s cubic-bezier(.165, .84, .44, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>
