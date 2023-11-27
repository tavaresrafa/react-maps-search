import PropTypes from 'prop-types'

import * as enums from './enums'

export const size = PropTypes.oneOf([...Object.values(enums.SIZE)])

export const mapMarkerVariants = PropTypes.oneOf([
  ...Object.values(enums.MAP_MARKER_VARIANTS)
])

export const numberPair = (props, propName) => {
  if (
    !Array.isArray(props[propName]) ||
    props[propName].length !== 2 ||
    !props[propName].every(Number.isInteger)
  ) {
    return new Error(`${propName} needs to be an array of two numbers`)
  }

  return null
}
