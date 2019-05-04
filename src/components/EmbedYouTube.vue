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
      ready: false,
      width: 0
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
    aspectRatio: 'resizeIframe',
    width: 'resizeIframe'
  },

  mounted () {
    // Load YouTube Iframe API if it's not available otherwise create the IFrame
    if (window.onYouTubeIframeAPIReady) {
      this.createIframe()
    } else {
      this.loadIframeApi()
    }

    this.observeRezise()
  },

  beforeDestroy () {
    this.$emit('input', 'paused')
  },

  methods: {
    observeRezise () {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          this.width = entry.contentRect.width
        }
      })
      resizeObserver.observe(this.$el)
    },

    resizeIframe () {
      if (this.iframe && this.width) {
        // Resize iframe with corresponding aspect ratio
        this.iframe.setAttribute('width', this.width)
        this.iframe.setAttribute('height', this.width * this.aspectRatio)
        this.ready = true
      }
    },

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
