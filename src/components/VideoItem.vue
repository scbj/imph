<template>
  <li class="video-item">
    <img :src="video.thumbnailUrl" class="thumbnail">
    <h2 class="title">
      {{ video.title }}
    </h2>
    <h3 class="artist">
      {{ video.artist }}
    </h3>
    <div v-if="video.tag" class="tag">
      <div class="line" />
      <span>{{ video.tag }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$easing: cubic-bezier(.165, .84, .44, 1);

.video-item {
  margin: 7rem 18rem 7rem 0;
  display: grid;
  grid-template-columns: 19rem 5rem 1fr;
  grid-template-rows: 1fr auto auto;
  align-items: center;
  cursor: pointer;

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
  margin: .5em 0;
  text-shadow: 0 .04em .2em rgba(#000000, 30%);
  transition: transform .3s $easing;
  z-index: 2;
}

.title {
  grid-area: 2 / 2 / 3 / -1;
}

.artist {
  color: #08F4EF;
  grid-area: 3 / 2 / 4 / -1;
}

.tag {
  color: #08F4EF;
  grid-area: 1 / -2 / 2 / -1;
  align-self: flex-end;
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
  height: 2px;
  box-shadow: 0 0 8px #61E5E2, 0 0 16px #61E5E2;
}
</style>
