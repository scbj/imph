<template>
  <div class="home-background">
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <video
        v-show="visible"
        :src="video"
        class="video"
        autoplay
        loop
        muted
      />
    </transition>
  </div>
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [ responsive ],

  props: {
    video: {
      type: String,
      default: ''
    }
  },

  computed: {
    visible () {
      return !!this.video
    }
  }
}
</script>

<style lang="scss" scoped>
.home-background {
  display: flex;
}

.video {
  object-fit: cover;
  flex-grow: 1;
  display: flex;
  margin: -2rem;
  filter: brightness(25%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-leave-active {
  transition-delay: 0;
  transition-duration: .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// .fade-enter-to,
// .fade-leave {
//   opacity: 1;
// }
</style>
