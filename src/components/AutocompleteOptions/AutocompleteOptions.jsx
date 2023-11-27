import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import styles from './AutocompleteOptionsStyles'

const AutocompleteOptions = ({ parts, option }) => {
  return (
    <Grid container alignItems="center">
      <Grid item sx={styles.locationContainer}>
        <LocationOnIcon sx={styles.locationIcon} />
      </Grid>
      <Grid item sx={styles.locationList}>
        {parts.map((part, index) => (
          <Box key={index} component="span" sx={styles.locationItem(part)}>
            {part.text}
          </Box>
        ))}
        <Typography variant="body2" color="text.secondary">
          {option.structured_formatting.secondary_text}
        </Typography>
      </Grid>
    </Grid>
  )
}

AutocompleteOptions.propTypes = {
  option: PropTypes.object,
  parts: PropTypes.arrayOf(PropTypes.object)
}

export default AutocompleteOptions
