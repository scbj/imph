<template>
  <video
    class="background-video"
    :src="source"
    :poster="poster"
    autoplay
    loop
    muted
  />
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    }
  }
}
</script>
