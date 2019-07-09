<template>
  <div class="falling-particles">
    <canvas id="particles-canvas" />
  </div>
</template>

<script>
window.requestAnimationFrame = window.requestAnimationFrame.bind(window)

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

  setup (canvas, particles, width, height) {
    this.canvas = canvas
    this.height = this.canvas.height = height
    this.width = this.canvas.width = width
    this.context = this.canvas.getContext('2d')
    this.particles = particles
    this.animation = this.fallingParticles
  },

  animate () {
    if (!this.paused) {
      requestAnimationFrame(this.animate.bind(this))
    }
    this.fallingParticles()
  },

  fallingParticles () {
    const idata = this.context.createImageData(this.width, this.height)
    for (var i = 0, l = this.particles.length; i < l; i++) {
      // thanks Loktar ;)
      const particle = this.particles[i]
      for (let w = 0; w < particle.size; w++) {
        for (let h = 0; h < particle.size; h++) {
          // ~~ do a better performance than Math.floor()
          const pData =
                (~~(particle.x + w) + ~~(particle.y + h) * this.width) * 4
          idata.data[pData] = 255
          idata.data[pData + 1] = 255
          idata.data[pData + 2] = 255
          idata.data[pData + 3] = 255
        }
      }
      particle.update(this.width, this.height)
    }
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
    const len = 62
    let height = window.innerHeight
    let width = window.innerWidth

    for (let i = 0; i < len; i++) {
      const particle = new Particle()
      particle.x = Math.random() * width
      particle.y = Math.random() * height
      particle.depth = (Math.random() * 10) | 0
      particle.size = (particle.depth + 1) / 7
      particle.vy = particle.depth * 0.4 + 1 / Math.random() * 0.4
      particles.push(particle)
    }

    this.scene.setup(
      document.getElementById('particles-canvas'),
      particles,
      width,
      height
    )
    this.scene.animate()
    window.onresize = () => {
      height = this.scene.height = this.scene.canvas.height = window.innerHeight
      width = this.scene.width = this.scene.canvas.width = window.innerWidth
    }
  },

  methods: {
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
