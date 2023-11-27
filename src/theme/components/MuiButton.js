import { alpha } from '@mui/material';
import { grays, black } from 'theme/colors'

export default {
  root: {
    height: 44,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'none'
  },
  contained: {
    boxShadow: 'none',
    '&$disabled': {
      color: grays.dark,
      backgroundColor: alpha(grays.light, 0.3)
    }
  },
  outlinedSecondary: {
    color: black,
    borderColor: grays.med
  },
  sizeLarge: {
    height: 60,
    fontSize: 14
  },
  sizeSmall: {
    height: 28,
    fontSize: 12
  }
}
