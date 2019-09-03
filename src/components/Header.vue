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
}

.home-button {
  display: inline-block;
}
</style>
