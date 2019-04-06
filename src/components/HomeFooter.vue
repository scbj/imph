<template>
  <section class="home-footer">
    <SocialLinks />
    <span class="copyright"><b>imphfilm</b> © 2019</span>
  </section>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  components: { SocialLinks }
}
</script>

<style lang="scss" scoped>
.home-footer {
  background: black;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.copyright {
  margin-top: 2em;
  opacity: 0.87;
}
</style>
