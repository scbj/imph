<template>
  <div class="startup-view">
    <div class="logo">
      <BaseLogo />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartupView'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_mixins.scss';

@mixin animate-scale-opacity ($delay) {
  animation: scale-and-fade 1s cubic-bezier(.165, .84, .44, 1) forwards $delay;
}

@mixin animate-blink {
  animation: blink  1.5s ease-in-out .4s infinite;
}

@keyframes scale-and-fade {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%,25%,75%,100% { filter: drop-shadow(0 0 7px rgba(255,255,255,0)); }
  50% { filter: drop-shadow(0 0 7px rgba(255,255,255,.5)); }
}

.startup-view {
  @include flex-center(column);
  padding: 2rem;
  height: 100vh;
  position: relative;

  user-select: none;

  > .text {
    font-weight: 500;
    font-size: 2rem;
    position: fixed;
    bottom: 0;
    opacity: 0;
    bottom: 3em;
    @include animate-scale-opacity(.5s);
  }
}

.logo {
  opacity: 0;
  @include animate-scale-opacity(.4s);

  > .base-logo {
    filter: drop-shadow(0 0 7px rgba(255,255,255,0));
    @include animate-blink();
  }
}

</style>
