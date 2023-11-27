import PropTypes from 'prop-types'

import Box from '@mui/material/Box'

import * as propTypes from 'constants/propTypes'

import styles from './GoogleMapMarkerStyles'

const GoogleMapMarker = ({
  alt,
  src,
  size,
  variant,
  onClick,
  isCluster,
  className,
  pointCount
}) => {
  const sizeStyle = size
    ? {
        width: size[0],
        height: size[1]
      }
    : {
        width: 35,
        height: 35
      }

  return isCluster ? (
    <Box style={styles.cluster} onClick={onClick}>
      <div style={styles.dot}>{pointCount}</div>
    </Box>
  ) : (
    <Box
      component="img"
      src={src}
      alt={alt}
      style={sizeStyle}
      className={className}
      variant={variant}
      sx={{
        ...styles.centered,
        ...(Boolean(onClick) && styles.clickable)
      }}
    />
  )
}

GoogleMapMarker.defaultProps = {
  alt: 'Map Marker'
}

GoogleMapMarker.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  isCluster: PropTypes.bool,
  className: PropTypes.string,
  pointCount: PropTypes.number,
  variant: propTypes.mapMarkerVariants,
  size: PropTypes.arrayOf(PropTypes.number)
}

export default GoogleMapMarker
