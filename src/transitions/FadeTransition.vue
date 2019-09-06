<template functional>
  <transition
    appear
    mode="out-in"
    name="fade"
  >
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active  {
  transition: opacity .4s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
