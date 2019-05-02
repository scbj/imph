<template>
  <div :class="{ ready }" class="embed-youtube">
    <div id="player" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'pause'
    },
    videoId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      player: null,
      aspectRatio: 1,
      iframe: null,
      ready: false
    }
  },

  watch: {
    iframe: {
      handler (iframe) {
        // Determines aspect ratio
        const height = iframe.getAttribute('height') || 0
        const width = iframe.getAttribute('width') || 0
        this.aspectRatio = height / width
      }
    },
    aspectRatio: {
      handler (value) {
        // Resize ifram with corresponding aspect ratio
        const parentWidth = this.$parent.$el.offsetWidth
        this.iframe.setAttribute('width', parentWidth)
        this.iframe.setAttribute('height', parentWidth * value)
        this.ready = true
      }
    }
  },

  mounted () {
    // Load YouTube Iframe API if it's not available otherwise create the IFrame
    if (window.onYouTubeIframeAPIReady) {
      this.createIframe()
    } else {
      this.loadIframeApi()
    }
  },

  methods: {
    /** Loads the YouTube IFrame Player API code asynchronously. */
    loadIframeApi () {
      // Register global handle
      window.onYouTubeIframeAPIReady = this.createIframe

      // Create and populate script element
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      // Insert script on the page
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    },

    /** Creates an <iframe> (and YouTube player). */
    createIframe () {
      const onIframeReady = (event) => {
        this.iframe = document.querySelector('iframe#player')
      }

      const onStateChange = event => {
        this.$emit('input', event.data === 1 ? 'playing' : 'paused')
      }
      // eslint-disable-next-line no-undef
      this.player = new YT.Player('player', {
        videoId: this.videoId,
        playerVars: {
          showinfo: 0,
          color: 'white',
          autoplay: 1
        },
        events: {
          onReady: onIframeReady,
          onStateChange: onStateChange
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.embed-youtube {
  opacity: 0;
  display: flex;
  transition: opacity 1s ease-out .2s;

  &.ready {
    opacity: 1;
  }
}
</style>
