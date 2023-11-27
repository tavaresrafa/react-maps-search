import head from 'lodash/head'
import PropTypes from 'prop-types'
import React, { createContext, useState, useMemo } from 'react'

import SAMPLE_DATA from 'constants/sampleData'

export const UIContext = createContext()

const initialCity = head(SAMPLE_DATA).location

export const UIProvider = ({ children }) => {
  const [alert, setAlert] = useState()
  const [bounds, setBounds] = useState(null)
  const [zoomMap, setZoomMap] = useState(12)
  const [showMenu, setShowMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [googleMapsApi, setGoogleMapsApi] = useState(null)
  const [mapLocation, setMapLocation] = useState(initialCity)
  const [markerLocations, setMarkerLocations] = useState(SAMPLE_DATA)

  const value = useMemo(
    () => ({
      alert,
      setAlert,
      closeAlert: () => setAlert({ ...alert, open: false }),
      isLoading,
      setIsLoading,
      showMenu,
      handleToggleMenu: () => setShowMenu(!showMenu),
      googleMapsApi,
      setGoogleMapsApi,
      mapInstance,
      setMapInstance,
      mapLocation,
      setMapLocation,
      markerLocations,
      setMarkerLocations,
      zoomMap,
      setZoomMap,
      bounds,
      setBounds
    }),
    [
      alert,
      isLoading,
      showMenu,
      googleMapsApi,
      mapInstance,
      mapLocation,
      markerLocations,
      zoomMap,
      bounds
    ]
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

UIProvider.propTypes = {
  children: PropTypes.node
}
