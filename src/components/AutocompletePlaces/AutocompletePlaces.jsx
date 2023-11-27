import PropTypes from 'prop-types'
import parse from 'autosuggest-highlight/parse'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import AutocompleteOptions from 'components/AutocompleteOptions'

const AutocompletePlaces = ({
  value,
  styles,
  options,
  setValue,
  setOptions,
  setZoomMap,
  setInputValue,
  googleMapsApi,
  setMapLocation,
  selectedCityLocation
}) => {
  return (
    <Autocomplete
      freeSolo
      autoComplete
      value={value}
      options={options}
      handleHomeEndKeys
      includeInputInList
      filterSelectedOptions
      filterOptions={x => x}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      getOptionLabel={option =>
        typeof option === 'string' ? option : option.description
      }
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setValue(newValue)
        selectedCityLocation(
          newValue,
          googleMapsApi,
          setZoomMap,
          setMapLocation
        )
      }}
      renderInput={params => (
        <TextField
          {...params}
          placeholder="Search a city"
          sx={styles.root}
          fullWidth
          InputProps={{
            ...params.InputProps,
            sx: styles.input
          }}
        />
      )}
      renderOption={(props, option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings || []

        const parts = parse(
          option.structured_formatting.main_text,
          matches.map(match => [match.offset, match.offset + match.length])
        )

        return (
          <li {...props}>
            <AutocompleteOptions parts={parts} option={option} />
          </li>
        )
      }}
    />
  )
}

AutocompletePlaces.propTypes = {
  value: PropTypes.object,
  setValue: PropTypes.func,
  styles: PropTypes.object,
  setOptions: PropTypes.func,
  setZoomMap: PropTypes.func,
  setInputValue: PropTypes.func,
  setMapLocation: PropTypes.func,
  googleMapsApi: PropTypes.object,
  selectedCityLocation: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object)
}

export default AutocompletePlaces
