import { THEME_TYPES } from 'constants/enums'

import {
  white,
  black,
  primary,
  secondary,
  grays,
  blues,
  warnings
} from './colors'

export default {
  type: THEME_TYPES.light,
  primary: {
    contrastText: white,
    dark: primary,
    main: primary,
    light: primary
  },
  secondary: {
    contrastText: black,
    dark: secondary,
    main: secondary,
    light: secondary
  },
  text: {
    primary: black,
    secondary: grays.darkest,
    link: grays.dark
  },
  background: {
    default: white,
    paper: grays.light
  },
  error: {
    contrastText: white,
    dark: warnings.danger,
    main: warnings.error,
    light: warnings.error
  },
  grays,
  blues,
  warnings
}
