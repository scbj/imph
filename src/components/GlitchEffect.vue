<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    },
    color: {
      type: String,
      default: 'white'
    }
  },

  computed: {
    cssVariables () {
      return {
        '--image-url': `url(${this.imageUrl})`,
        '--highlight-color': this.color
      }
    }
  },

  render (h) {
    const createImages = () => {
      const images = []
      for (let i = 0; i < 5; i++) {
        images.push(<div class="image" />)
      }
      return images
    }
    return (
      <div
        class="glitch-effect container"
        style={this.cssVariables}>
        <div class="images">{createImages()}</div>
        <h2 class="title">
          {this.title}
          <span class="description">{this.description}</span>
        </h2>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_vars.scss";

.glitch-effect {
  --color-text: #454847;
  --color-bg: #1d2121;
  --color-link: #454847;
  --color-link-hover: #fff;
  --color-info: #454847;
  --glitch-width: 22rem;
  --glitch-height: calc(var(--glitch-width) * 1.25);
  --color-title: #fff;
  --color-subtitle: var(--highlight-color);

  --gap-horizontal: 3px;
  --gap-vertical: 70px;
  --time-anim: 2.25s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: overlay;
  --blend-mode-4: none;
  --blend-mode-5: none;
  --blend-color-3: rgba(255, 255, 255, 0.2);
  --blend-color-4: transparent;
  --blend-color-5: transparent;
}

.container {
  position: relative;
  max-width: 600px;

  &:hover {
    cursor: pointer;

    .images {
      filter: blur(0);
      transform: none;
    }

    @media screen and (min-width: $medium) {
      .description {
        opacity: 1;
        animation: glitch-anim-text 0.5s linear;
      }
    }
  }
}

.images {
  border-radius: 7px;
  position: relative;
  width: var(--glitch-width);
  max-width: 400px;
  height: var(--glitch-height);
  max-height: calc(400px * 1.25);
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0px 15px 45px -10px rgba(#000000, 60%);

  $easing: cubic-bezier(.165, .84, .44, 1);
  transition: all .3s $easing;

  @media screen and (min-width: $medium) {
    border-radius: 0;
    transform: scale(0.98);
    filter: brightness(65%) grayscale(20%) blur(1px);
  }
}

.images:hover .image {
  &:nth-child(n + 2) {
    opacity: 1;
  }

  &:nth-child(2) {
    transform: translate3d(var(--gap-horizontal), 0, 0);
    animation: glitch-anim-1-horizontal var(--time-anim) infinite linear
      alternate;
  }

  &:nth-child(3) {
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
    animation: glitch-anim-2-horizontal var(--time-anim) infinite linear
      alternate;
  }

  &:nth-child(4) {
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
      scale3d(-1, -1, 1);
    animation: glitch-anim-3-horizontal var(--time-anim) infinite linear
      alternate;
  }

  /* Hover flash animation on last image */
  &:nth-child(5) {
    animation: glitch-anim-flash 0.5s steps(1, end) infinite;
  }
}

.image {
  position: absolute;
  top: calc(-1 * var(--gap-vertical));
  left: calc(-1 * var(--gap-horizontal));
  width: calc(100% + var(--gap-horizontal) * 2);
  height: calc(100% + var(--gap-vertical) * 2);
  background: var(--image-url) no-repeat 40% 40%;
  background-size: cover;
  transform: translate3d(0, 0, 0);

  &:nth-child(3) {
    background-color: var(--blend-color-3);
    background-blend-mode: var(--blend-mode--3);
  }

  &:nth-child(n + 2) {
    opacity: 0;
  }
}

.title {
  position: absolute;
  margin: 0;
  color: var(--color-title);
  padding: 30vh 0.5em 0;
  top: 0;
  pointer-events: none;
  line-height: 1;
  text-shadow: 0 0.3em 0.5em rgba(#000000, 50%);
}

.container:nth-child(odd) .title {
  right: 0;
  text-align: right;
  padding-top: 10vh;
}

.description {
  display: block;
  position: relative;
  color: var(--color-subtitle);
  text-shadow: 0 .1em .3em rgba(#000000, 20%);

  @media screen and (min-width: $medium) {
    opacity: 0;
  }
}

@media screen and (max-width: 55em) {
  /* .container {
    margin: 0 0 3em;
  }
  .container:nth-child(odd) {
    margin-top: 0;
  }
  .title,
  .container:nth-child(odd) .title {
    font-size: 2em;
    text-align: center;
    width: 100%;
    padding: 0;
    top: 20%;
  } */
}

/* Animations */

/* Horizontal */
@keyframes glitch-anim-1-horizontal {
  0% {
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  10% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }
  20% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }
  30% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }
  40% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  50% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  60% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  70% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  80% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  90% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  100% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
}

@keyframes glitch-anim-2-horizontal {
  0% {
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  15% {
    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }
  22% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
  }
  31% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  45% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
  }
  51% {
    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
  }
  63% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  76% {
    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }
  81% {
    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
  }
  94% {
    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
  }
  100% {
    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
  }
}

@keyframes glitch-anim-3-horizontal {
  0% {
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }
  5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }
  10% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }
  25% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  27% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }
  30% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }
  33% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }
  37% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }
  40% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  45% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }
  50% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }
  53% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }
  57% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }
  60% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }
  65% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }
  70% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }
  73% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  80% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }
  100% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
}

@keyframes glitch-anim-text {
  0% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  10% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  20% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  35% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  50% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
  }
  60% {

    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  70% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);

  }
  80% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  90% {
    transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

/* Flash */
@keyframes glitch-anim-flash {
  0% {
    opacity: 0.2;
    transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
  }
  33%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
</style>
