<template>
  <div class="home-background">
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <div
        v-if="mode === 'image'"
        :style="backgroundImage"
        class="image"
      />
      <video
        v-else
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
    },
    image: {
      type: String,
      default: ''
    }
  },

  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.image})`
      }
    },

    mode () {
      return this.lte('small') || !this.video
        ? 'image'
        : 'video'
    }
  }
}
</script>

<style lang="scss" scoped>
.home-background {
  display: flex;
}

.image {
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: cover;
  flex-grow: 1;
  margin: -4rem;
  filter: blur(25px) brightness(25%);
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
  transition-duration: .1s;
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
