export default {
  props: {
    backgroundSource: {
      type: String,
      default: ''
    }
  },

  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.backgroundSource})`
      }
    }
  }
}
