<template>
  <div class="background-media">
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <video
        v-show="visible"
        :src="video"
        autoplay
        loop
        muted
      />
    </transition>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import responsive from '@/mixins/responsive'

export default {
  mixins: [ responsive ],

  computed: {
    video: get('backgroundMedia/video'),

    visible () {
      return this.video && this.gte('medium')
    }
  }
}
</script>

<style lang="scss" scoped>
.background-media {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

video {
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
