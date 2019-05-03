<template>
  <TransitionFade>
    <div :class="{ minimal: playerOpened }" class="videos-view">
      <router-link
        :to="{ name: 'home' }"
        class="logo"
        :class="playerReactive"
      >
        <BaseLogo size="small" />
      </router-link>
      <VideoList :class="playerReactive" :videos="category.videos" />
      <GlitchyText
        :class="playerReactive"
        class="title"
        :animate="lte('small')"
      >
        <h2>
          {{ category.label }}
        </h2>
      </GlitchyText>
      <HomeFooter :class="playerReactive" />
      <router-view />
    </div>
  </TransitionFade>
</template>

<script>
import { get } from 'vuex-pathify'

import responsive from '@/mixins/responsive'
import GlitchyText from '@/components/GlitchyText.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import TransitionFade from '@/components/TransitionFade'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'VideosView',

  components: {
    GlitchyText,
    HomeFooter,
    TransitionFade,
    VideoList
  },

  mixins: [ responsive ],

  computed: {
    playerOpened: get('player/opened'),
    videos () {
      return this.category && this.category.videos
    },
    category () {
      return this.findActiveCategory({
        categories: this.$store.get('categories'),
        categoryName: this.$route.params.category
      })
    },

    playerReactive () {
      return {
        blurred: this.playerOpened,
        out: this.playerOpened
      }
    }
  },

  created () {
    if (!this.category) {
      this.$router.push({ name: 'home' })
    }
  },

  methods: {
    findActiveCategory ({ categories, categoryName }) {
      if (!categories) {
        return console.log("Category list isn't valid")
      } else if (!categories.length) {
        return console.log('Category list is empty')
      }

      return categories.find(c => c.name === categoryName) ||
        console.log(`Category '${categoryName}' doesn't exist`, categories)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';

.videos-view {
  display: grid;
  grid-template-columns: 20% 1fr auto;
  grid-template-rows: auto auto;
  align-items: flex-start;
  position: relative;

  > * {
    z-index: 10;
    transition: filter .3s ease-in-out;
  }

  &.minimal {
    .video-list {
      transform: translateX(-8rem);
    }
  }
}

.logo,
.title {
  margin: 3rem;

  @media screen and(min-width: $medium) {
    position: sticky;
    top: 3rem;
  }
}

.title {
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;

  h2 {
    margin: 0;
  }
}

.video-list {
  grid-column: 1 / 4;
  transition: transform .2s cubic-bezier(.165, .84, .44, 1);

  @media screen and(min-width: $medium) {
    grid-column: 2 / 4;
  }
}

.blurred {
  filter: blur(8px)
}

.home-footer {
  grid-column: 1 / -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
