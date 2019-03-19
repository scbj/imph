<template>
  <div class="startup-view">
    <div class="logo">
      <BaseLogo />
    </div>
    <span>imphfilm</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_mixins.scss';

@mixin animate-scale-opacity ($delay) {
  animation: scale-and-fade 1s cubic-bezier(.165, .84, .44, 1) forwards $delay;
}

@mixin animate-blink {
  animation: blink  1.7s ease-in-out 1s infinite;
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

  > span {
    opacity: 0;
    font-size: 1.2rem;
    position: absolute;
    bottom: 2.2em;
    @include animate-scale-opacity(.5s);

    @media screen and (min-width: $medium) {
      bottom: 4em;
    }
  }
}

.logo {
  opacity: 0;
  @include animate-scale-opacity(.4s);

  > img {
    max-height: 92px;
    filter: drop-shadow(0 0 7px rgba(255,255,255,0));
    @include animate-blink();

    @media screen and (min-width: $medium) {
      max-height: 174px;
    }
  }
}

</style>
