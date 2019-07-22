<template>
  <div class="falling-particles">
    <canvas id="particles-canvas" />
  </div>
</template>

<script>
/** Set all default values. */
function Scene () {
  this.animation = undefined
  this.canvas = undefined
  this.height = 0
  this.width = 0
  this.context = undefined
  this.paused = false
}

Scene.prototype = {
  constructor: Scene,

  setup (canvas, particles, width, height, color) {
    this.canvas = canvas
    this.height = this.canvas.height = height
    this.width = this.canvas.width = width
    this.context = this.canvas.getContext('2d')
    this.particles = particles
    this.animation = this.fallingParticles
    this.color = color
  },

  animate () {
    if (!this.paused) {
      requestAnimationFrame(this.animate.bind(this))
    }
    this.fallingParticles()
  },

  fallingParticles () {
    /**
     * The CanvasRenderingContext2D.createImageData() method of the Canvas 2D API
     * creates a new, blank ImageData object with the specified dimensions.
     * All of the pixels in the new object are transparent black. (cf MDN)
     */
    const idata = this.context.createImageData(this.width, this.height)
    for (var i = 0, l = this.particles.length; i < l; i++) {
      // thanks Loktar ;)
      const particle = this.particles[i]
      for (let w = 0; w < particle.size; w++) {
        for (let h = 0; h < particle.size; h++) {
          // ~~ do a better performance than Math.floor()
          const pData =
                (~~(particle.x + w) + ~~(particle.y + h) * this.width) * 4
          idata.data[pData] = this.color.r
          idata.data[pData + 1] = this.color.g
          idata.data[pData + 2] = this.color.b
          idata.data[pData + 3] = 255
        }
      }
      particle.update(this.width, this.height)
    }

    /**
     * The CanvasRenderingContext2D.putImageData() method of the Canvas 2D API
     * paints data from the given ImageData object onto the canvas. If a dirty
     * rectangle is provided, only the pixels from that rectangle are painted.
     * This method is not affected by the canvas transformation matrix. (cf MDN)
     */
    this.context.putImageData(idata, 0, 0)
  }
}

function Particle () {
  this.x = 0
  this.y = 0
  this.size = 0
  this.depth = 0
  this.vy = 0
}

Particle.prototype = {
  constructor: Particle,

  update (width, height) {
    // Move to the top
    if (this.y < 0) {
      this.y = height - this.size
    }
    this.y -= this.vy
  }
}

export default {
  props: {
    paused: {
      type: Boolean,
      default: false
    },
    color: {
      type: Object,
      default: () => ({ r: 255, g: 255, b: 255 })
    }
  },

  data () {
    return {
      scene: null
    }
  },

  watch: {
    paused: {
      immediate: true,
      handler (paused) {
        this.changeAnimationState(paused)
      }
    }
  },

  mounted () {
    this.scene = new Scene()
    const particles = []
    const particleCount = 62

    // Uses base viewport size for better performance and observe for viewport resize.
    let height = window.innerHeight
    let width = window.innerWidth
    window.onresize = () => {
      height = this.scene.height = this.scene.canvas.height = window.innerHeight
      width = this.scene.width = this.scene.canvas.width = window.innerWidth
    }

    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle()

      // Randomly define position
      particle.x = Math.random() * width
      particle.y = Math.random() * height

      // Properties to create parallax effect
      particle.depth = (Math.random() * 10) | 0
      particle.size = (particle.depth + 1) / 7
      particle.vy = particle.depth * 0.4 + 1 / Math.random() * 0.4

      particles.push(particle)
    }

    this.scene.setup(
      document.getElementById('particles-canvas'),
      particles,
      width,
      height,
      this.color
    )

    this.scene.animate()
  },

  methods: {
    /**
     * Define the paused state of the current scene.
     * @param {Boolean} paused The animation playback state.
     */
    changeAnimationState (paused) {
      this.scene && Object.assign(this.scene, { paused })
      this.scene && this.scene.paused === false && this.scene.animate()
    }
  }
}
</script>

<style lang="scss" scoped>
.falling-particles {
  pointer-events: none;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
