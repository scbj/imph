<script>
export default {
  render (h) {
    const imagePath = require('@/assets/images/logo-128x128.png')
    return <img
      class="base-logo"
      src={imagePath}
      alt="logo" />
  }
}
</script>

<style lang="scss" scoped>
img {
  $size: 3.5rem;
  width: $size;
  height: $size;
}
</style>
