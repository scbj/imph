<template>
  <li
    :class="{ reverse: reverseAlignement }"
    class="video-item"
    @mouseenter="mouseOver = true"
    @mouseleave="mouseOver = false"
    @click="openPlayer"
  >
    <img :src="thumbnailUrl" class="thumbnail">
    <GlitchyText class="title" :animate="gte('medium') && mouseOver">
      <h2>
        {{ video.title }}
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

export default {
  components: {
    GlitchyText
  },

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
      return `${this.video.thumbnail.url}?h=680`
    }
  },

  methods: {
    openPlayer () {
      const { youTubeId } = this.video
      this.$router.push({ name: 'player', params: { id: youTubeId } })
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
  cursor: pointer;

  .thumbnail { grid-area: 1 / 2 / -1 / -1; }
  .title { grid-area: 1 / 1 / 2 / -1 }
  .artist { grid-area: 2 / 1 / 3 / -1 }

  @media screen and (min-width: $medium){
    margin: 7rem 12rem 7rem 0;
    grid-template-columns: 19rem 5rem 1fr;
    grid-template-rows: 1fr repeat(2, auto);

    .thumbnail { grid-area: 1 / 1 / 3 / 3; }
    .title { grid-area: 2 / 2 / 3 / -1 }
    .artist { grid-area: 3 / 2 / 4 / -1 }

    &:hover {
      > .tag {
        opacity: 1;
        transform: none;
      }
      .thumbnail {
        box-shadow: 10px 15px 70px -5px rgba(#08F4EF, 20%);
        transform: translate3d(-0.5em, -0.5em, 0)
      }
      .title,
      .artist {
        transform: translate3d(.5em, .5em, 0)
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

.thumbnail {
  box-shadow: 10px 15px 30px -4px rgba(#08F4EF, 10%);
  border-radius: 7px;
  grid-area: 1 / 1 / 3 / 3;
  width: 100%;
  transition: all .3s $easing;
  z-index: 1;
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
  color: #08F4EF;
  margin-top: 0.5em;
  grid-area: 3 / 2 / 4 / -1;
}

.tag {
  color: #08F4EF;
  grid-area: 1 / -2 / 2 / -1;
  align-self: flex-end;
  justify-self: flex-start;
  opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(-10px) scale(0.9);
  transform-origin: 0% 50%;
  transition: all .2s $easing;
}

.line {
  background-color: rgba(#65EEEB, 89%);
  flex-grow: 1;
  margin: 1rem;
  width: 10rem;
  height: 2px;
  box-shadow: 0 0 8px #61E5E2, 0 0 16px #61E5E2;
}
</style>
