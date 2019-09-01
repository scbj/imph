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
  position: fixed;
  width: 100%;
  top: 0;
}

.home-button {
  display: inline-block;
  margin: 3rem;
}
</style>
