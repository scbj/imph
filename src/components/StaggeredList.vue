<template>
  <transition-group
    appear
    name="staggered"
    tag="ul"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <slot />
  </transition-group>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: {
    opacity: {
      type: Function,
      default: () => 1
    }
  },

  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(3rem)'
    },

    enter (el, done) {
      if (el.dataset.index === undefined) {
        return console.log("Dataset HTML 'data-index' not defined on <transifion-group> childrens")
      }
      const delay = el.dataset.index * 125
      const opacity = this.opacity() || 1
      setTimeout(() => {
        Velocity(
          el,
          { opacity, transform: 'translateY(0)' },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>
