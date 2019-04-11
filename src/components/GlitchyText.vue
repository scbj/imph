<template>
  <div class="glitchy-text">
    <template v-if="animate">
      <div class="text r">
        <slot />
      </div>
      <div class="text g">
        <slot />
      </div>
      <div class="text b">
        <slot />
      </div>
    </template>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.glitchy-text {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
}

.text {
  grid-area: 1 / 1 / 2 / 2;
  mix-blend-mode: difference;
  animation: giggle 1s ease infinite;
}

.r {
  color: #f00;
  margin-left: -0.5px;
}

.g {
  color: #0f0;
  animation-delay: -0.67s;
}

.b {
  color: #00f;
  margin-left: 0.5px;
  animation-delay: -0.33s;
}

@keyframes giggle {
   0%, 100% {
      transform: translateY(-2px);
   }
   50% {
      transform: translateY(2px);
   }
}
</style>
