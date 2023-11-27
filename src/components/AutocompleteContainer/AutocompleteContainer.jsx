import { useUIContext } from 'context'
import { useState, useEffect } from 'react'

import { useTheme } from '@mui/material/styles'

import { useSelectedCityLocation } from 'utils/hooks/useSelectedCityLocation'
import { useFetchPlacePredictions } from 'utils/hooks/useFetchPlacePredictions'

import AutocompletePlaces from 'components/AutocompletePlaces'

import styles from './AutocompleteContainerStyles'

const autocompleteService = { current: null }

const AutocompleteContainer = () => {
  const [value, setValue] = useState(null)
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')

  const selectedCityLocation = useSelectedCityLocation()
  const { googleMapsApi, setZoomMap, setMapLocation } = useUIContext()
  const fetchPlacePredictions = useFetchPlacePredictions(autocompleteService)

  const theme = useTheme()
  const autocompleteStyles = theme.components.MuiOutlinedInput

  useEffect(() => {
    let active = true

    if (!autocompleteService.current && googleMapsApi) {
      autocompleteService.current =
        new googleMapsApi.places.AutocompleteService()
    }

    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetchPlacePredictions(
      {
        input: inputValue,
        types: ['(cities)']
      },
      results => {
        if (active) {
          let newOptions = []

          if (value) {
            newOptions = [value]
          }

          if (results) {
            newOptions = [...newOptions, ...results]
          }

          setOptions(newOptions)
        }
      }
    )

    return () => {
      active = false
    }
  }, [value, inputValue, fetchPlacePredictions])

  return (
    <div style={styles.root}>
      <AutocompletePlaces
        value={value}
        options={options}
        setValue={setValue}
        setOptions={setOptions}
        setZoomMap={setZoomMap}
        styles={autocompleteStyles}
        setInputValue={setInputValue}
        googleMapsApi={googleMapsApi}
        setMapLocation={setMapLocation}
        selectedCityLocation={selectedCityLocation}
      />
    </div>
  )
}

export default AutocompleteContainer
