/**
 * Convert hexadecimal color to RGB equilavent.
 * @param {String} value The hexadecimal value
 * @param {Object} options
 * @param {Boolean} options.hasObject If true returns an object instead of a string.
 *
 * @typedef {Object} color
 * @property {String}
 *
 * @returns {String | Object}
 */
export function hexToRGB (value, options = { hasObject: false }) {
  if (typeof value !== 'string') { return value }

  let r = 0; let g = 0; let b = 0

  // 3 digits
  if (value.length === 4) {
    r = '0x' + value[1] + value[1]
    g = '0x' + value[2] + value[2]
    b = '0x' + value[3] + value[3]

  // 6 digits
  } else if (value.length === 7) {
    r = '0x' + value[1] + value[2]
    g = '0x' + value[3] + value[4]
    b = '0x' + value[5] + value[6]
  }

  if (options.hasObject) {
    return {
      r: +r,
      g: +g,
      b: +b
    }
  }

  return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
}
