const breakpoints = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge'
]

export default {
  methods: {
    /**
     * Matches breakpoints that are greater than or equal to a specified breakpoint.
     * @param {String} name Breakpoint name
     */
    gte (name) {
      return breakpoints.indexOf(this.$mq) >= breakpoints.indexOf(name)
    },

    /**
     * Matches breakpoints that are less than or equal to a specified breakpoint.
     * @param {String} name Breakpoint name
     */
    lte (name) {
      return breakpoints.indexOf(this.$mq) <= breakpoints.indexOf(name)
    }
  }
}
