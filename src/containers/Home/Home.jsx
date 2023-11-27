import Box from '@mui/material/Box'

import MapContainer from 'components/MapContainer'
import AutocompleteContainer from 'components/AutocompleteContainer'

import styles from './HomeStyles'

const Home = () => {
  return (
    <Box sx={styles.root}>
      <AutocompleteContainer />

      <MapContainer />
    </Box>
  )
}

export default Home
