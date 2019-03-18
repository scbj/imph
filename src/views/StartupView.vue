<template>
  <div class="startup-view">
    <BaseLogo class="logo" />
    <span>imphfilm</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_mixins.scss';

$animation-scale-and-fade-duration: 1s;
$animation-scale-and-fade-easing: cubic-bezier(.165, .84, .44, 1);
$animation-blink-duration: 1.7s;
$animation-blink-delay: 1s;
$animation-blink-easing: ease-in-out;

.startup-view {
  @include flex-center(column);
  padding: 2rem;
  height: 100vh;
  position: relative;

  user-select: none;

  > span {
    font-size: 1.2rem;
    position: absolute;
    bottom: 4em;
  }
}

.logo {
  opacity: 0;
  filter: drop-shadow(0 0 7px rgba(255,255,255,0));
  max-height: 174px;

  animation:
    scale-and-fade
    $animation-scale-and-fade-duration
    $animation-scale-and-fade-easing
    forwards
    .4s,
    blink
    $animation-blink-duration
    $animation-blink-easing
    $animation-blink-delay
    infinite;

  &:hover {
    animation:
      scale-and-fade
      $animation-scale-and-fade-duration
      $animation-scale-and-fade-easing
      forwards
      .4s;
    opacity: .2;
  }
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
  0%,25%,75%,
  100% {
    filter: drop-shadow(0 0 7px rgba(255,255,255,0));
  }
  50% {
    filter: drop-shadow(0 0 7px rgba(255,255,255,.5));
  }
}

</style>
