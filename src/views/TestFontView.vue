<template>
  <div class="test-font-view">
    <TestFontCanvas color="white" background="black" />
    <TestFontCanvas color="black" background="white" />
  </div>
</template>

<script>
import TestFontCanvas from '@/components/TestFontCanvas.vue'

export default {
  components: {
    TestFontCanvas
  }
}
</script>

<style lang="scss" scoped>
.test-font-view {
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 55rem) {
    flex-direction: row;
  }
}

.test-font-canvas {
  flex-grow: 1;
}
</style>
