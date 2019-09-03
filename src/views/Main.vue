<script>
import responsive from '@/mixins/responsive'

import BackgroundMedia from '@/components/BackgroundMedia'
import Header from '@/components/Header'
import SocialLinks from '@/components/SocialLinks'

export default {
  mixins: [ responsive ],

  render (h) {
    return (
      <main>
        <BackgroundMedia />
        <RouterView class="content" />
        { this.gte('medium') && <SocialLinks />}
        <Header />
      </main>
    )
  }
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;

  > header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 80;
  }

  > .social-links {
    padding: 2rem;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 60;
  }
}
</style>
