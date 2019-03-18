<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/styles/_base.scss';

$animation-easing: cubic-bezier(.165, .84, .44, 1);
$animation-duration: .6s;

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  height: 100%;

  animation:
    darken-background
    $animation-duration
    $animation-easing
    forwards;
}

// Animations
@keyframes darken-background {
  to { background: #000000 }
}
</style>
