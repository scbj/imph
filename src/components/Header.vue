<script>
export default {
  render (h) {
    return (
      <header>
        <RouterLink to={{ name: 'home' }} class="home-button">
          <BaseLogo />
        </RouterLink>
      </header>
    )
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 80;
}

.home-button {
  display: inline-block;
}
</style>
