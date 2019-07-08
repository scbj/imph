<template>
  <div class="falling-particles">
    <canvas id="particles-canvas" />
  </div>
</template>

<script>
const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

function Scene () {
  this.animation = undefined
  this.canvas = undefined
  this.height = 0
  this.width = 0
  this.context = undefined
  this.paused = false
  this.stats = undefined
  this.istats = undefined
}

Scene.prototype = {
  constructor: Scene,

  setup (canvas, animation, width, height, stats) {
    this.canvas = canvas
    this.animation = animation
    this.height = this.canvas.height = height
    this.width = this.canvas.width = width
    this.context = this.canvas.getContext('2d')
  },

  animate () {
    if (!this.paused) {
      requestAnimFrame(this.animate.bind(this))
    }
    this.animation(this)
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
    if (this.y > height) {
      this.y = 1 - this.size
    }
    this.y += this.vy
  }
}

export default {
  mounted () {
    const scene = new Scene()
    const particles = []
    const len = 120
    let height = window.innerHeight
    let width = window.innerWidth

    function fallingParticles () {
      const idata = this.context.createImageData(this.width, this.height)
      for (var i = 0, l = particles.length; i < l; i++) {
        // thanks Loktar ;)
        const particle = particles[i]
        for (let w = 0; w < particle.size; w++) {
          for (let h = 0; h < particle.size; h++) {
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

    for (let i = 0; i < len; i++) {
      const particle = new Particle()
      particle.x = Math.random() * width
      particle.y = Math.random() * height
      particle.depth = (Math.random() * 10) | 0
      particle.size = (particle.depth + 1) / 8
      particle.vy = particle.depth * 0.10 + 0.4 / Math.random()
      particles.push(particle)
    }

    scene.setup(
      document.getElementById('particles-canvas'),
      fallingParticles,
      width,
      height,
      !0
    )
    scene.animate()
    window.onresize = () => {
      height = scene.height = scene.canvas.height = window.innerHeight
      width = scene.width = scene.canvas.width = window.innerWidth
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
  // transform: rotateZ(180deg);
}
</style>
