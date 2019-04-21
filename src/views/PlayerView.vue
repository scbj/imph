<template>
  <div class="player-view">
    Some code here
  </div>
</template>

<script>
export default {
  created () {
    this.foo(false)
  },

  beforeDestroy () {
    this.foo(true)
  },

  methods: {
    foo (value) {
      const root = document.documentElement
      const offset = root.scrollTop

      document.body.style.paddingRight = value ? '' : '10px'
      root.style.setProperty('--overflow-y', value ? '' : 'hidden')
      root.style.setProperty('--overflow-offset', value ? '0px' : `-${offset}px`)
    }
  }
}
</script>

<style lang="scss" scoped>
.player-view {
  background: rgba(black, 80%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow-y: auto;
  transform: translateY(calc(var(--overflow-offset) * -1))
}
</style>
