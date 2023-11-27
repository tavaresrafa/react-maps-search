import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

import { getMapStyles } from 'constants/mapStyles'

import { useUIContext } from 'context'

import { GOOGLE_API_KEY } from 'lib/config'

import styles from './GoogleMapStyles'

const controls = {
  panControl: false,
  zoomControl: false,
  scaleControl: false,
  clickableIcons: false,
  mapTypeControl: false,
  disableDefaultUI: true,
  streetViewControl: false
}

const GoogleMap = ({ children }) => {
  const theme = useTheme()
  const mapStyles = getMapStyles(theme.palette.type)
  const {
    zoomMap,
    setBounds,
    setZoomMap,
    mapLocation,
    setMapInstance,
    setGoogleMapsApi
  } = useUIContext()

  return (
    <Box sx={styles.root}>
      <GoogleMapReact
        zoom={zoomMap}
        yesIWantToUseGoogleMapApiInternals
        options={{ styles: mapStyles, ...controls }}
        bootstrapURLKeys={{ key: GOOGLE_API_KEY, libraries: ['places'] }}
        center={{ lat: mapLocation.latitude, lng: mapLocation.longitude }}
        onGoogleApiLoaded={({ maps, map }) => {
          setGoogleMapsApi(maps)
          setMapInstance(map)
        }}
        onChange={({ zoom, bounds }) => {
          setZoomMap(zoom)
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ])
        }}
      >
        {children}
      </GoogleMapReact>
    </Box>
  )
}

GoogleMap.propTypes = {
  children: PropTypes.node
}

export default GoogleMap
