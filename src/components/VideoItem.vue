<template>
  <li
    :class="{ reverse: reverseAlignement }"
    class="video-item"
    @mouseenter="mouseOver = true"
    @mouseleave="mouseOver = false"
    @click="openPlayer"
  >
    <img
      v-if="gte('medium')"
      :src="thumbnailUrl"
      class="deep-thumbnail deep-2"
    >
    <img
      v-if="gte('medium')"
      :src="thumbnailUrl"
      class="deep-thumbnail deep-1"
    >
    <img :src="thumbnailUrl" class="thumbnail">
    <GlitchyText class="title" :animate="gte('medium') && mouseOver">
      <h2>
        {{ video.title | lowerCase }}
      </h2>
    </GlitchyText>
    <h3 class="artist">
      {{ video.artist }}
    </h3>
    <div v-if="gte('medium') && video.tag" class="tag">
      <div class="line" />
      <span>{{ video.tag }}</span>
    </div>
  </li>
</template>

<script>
import responsive from '@/mixins/responsive'
import GlitchyText from '@/components/GlitchyText.vue'

import { lowerCase } from '@/filters/string'

export default {
  components: {
    GlitchyText
  },

  filters: { lowerCase },

  mixins: [ responsive ],

  props: {
    video: {
      type: Object,
      required: true
    },
    reverseAlignement: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      mouseOver: false
    }
  },

  computed: {
    thumbnailUrl () {
      return `${this.video.thumbnail.url}?h=420`
    }
  },

  methods: {
    openPlayer () {
      this.$store.dispatch('player/play', this.video)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';

$easing: cubic-bezier(.165, .84, .44, 1);

.video-item {
  margin: 7rem 2rem;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 10fr auto 1fr;
  align-items: center;
  perspective: 500px;
  cursor: pointer;

  .thumbnail,
  .deep-thumbnail { grid-area: 1 / 2 / -1 / -1; }
  .title { grid-area: 1 / 1 / 2 / -1 }
  .artist { grid-area: 2 / 1 / 3 / -1 }

  @media screen and (min-width: $medium){
    margin: 7rem 12rem 7rem 0;
    grid-template-columns: 19rem 5rem 1fr;
    grid-template-rows: 1fr repeat(2, auto);

    .thumbnail,
    .deep-thumbnail { grid-area: 1 / 1 / 3 / 3; }
    .title { grid-area: 2 / 2 / 3 / -1 }
    .artist { grid-area: 3 / 2 / 4 / -1 }

    &:hover {
      > .tag {
        opacity: 1;
        transform: translate3d(0,0,-2em) rotateY(-10deg);
      }
      .thumbnail {
        box-shadow: 10px 15px 70px -5px rgba(var(--highlight-color-rgb), 20%);

        transform: translate3d(-.4em,-.4em,0) rotateY(-10deg);
      }
      .deep-thumbnail {
        transform: translate3d(-.4em,-.4em,-9em) rotateY(-10deg);

        &.deep-2 {
          transform: translate3d(-.4em,-.4em,-23em) rotateY(-10deg);
        }
      }
      .title,
      .artist {
        transform: translate3d(.6em, .6em, 0);
      }
      .title {
        text-shadow: 0 0.1em 1em rgba(#000000, 0);
      }
    }
  }

  @media screen and (min-width: $large){
    margin-right: 18rem;
  }
}

.thumbnail,
.deep-thumbnail {
  border-radius: 7px;
  max-width: 100%;
  max-height: 30rem;
  transition: all .3s $easing;
  grid-area: 1 / 1 / 3 / 3;
}

.thumbnail {
  box-shadow: 10px 15px 30px -4px rgba(var(--highlight-color-rgb), 10%);
  z-index: 2;
}

.deep-thumbnail {
  filter: brightness(50%);
  // opacity: 0.5;
  height: 100%;
  z-index: 1;
  transform: translate3d(-0.1em,0,-2em);

  &.deep-2 {
    // opacity: 0.2;
  filter: brightness(20%);
  transform: translate3d(-0.1em,0,-2em);
  }
}

.title,
.artist,
.tag {
  text-shadow: 0 0.1em 1em rgba(#000000, 60%);
  transition: transform .3s $easing;
  z-index: 2;
}

.title {
  margin-bottom: 0.5em;
  grid-area: 2 / 2 / 3 / -1;
  align-self: flex-end;
}

.artist {
  color: var(--highlight-color);
  margin-top: 0.5em;
  grid-area: 3 / 2 / 4 / -1;
}

.tag {
  color: var(--highlight-color);
  grid-area: 1 / -2 / 2 / -1;
  align-self: flex-end;
  justify-self: flex-start;
  opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(-10px);
  transform-origin: 0% 50%;
  transition: all .2s $easing;
}

.line {
  background-color: rgba(var(--highlight-color-rgb), 89%);
  flex-grow: 1;
  margin: 1rem;
  width: 10rem;
  height: 2px;
  // box-shadow: 0 0 8px #61E5E2, 0 0 16px #61E5E2;
  box-shadow: 0 0 8px var(--highlight-color), 0 0 16px var(--highlight-color);
}
</style>
