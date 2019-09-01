<script>
import BackgroundMedia from '@/components/BackgroundMedia'
import Header from '@/components/Header'

export default {
  render (h) {
    return (
      <main>
        <BackgroundMedia />
        <RouterView class="content" />
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
}
</style>
