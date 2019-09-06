<template>
  <section class="home-footer">
    <SocialLinks v-if="lte('medium')" />
    <span class="copyright"><b>imphfilm</b> © 2019</span>
  </section>
</template>

<script>
import responsive from '@/mixins/responsive'

import SocialLinks from '@/components/SocialLinks.vue'

export default {
  components: { SocialLinks },
  mixins: [ responsive ]
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
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 2em;

  opacity: 0.87;
}
</style>
