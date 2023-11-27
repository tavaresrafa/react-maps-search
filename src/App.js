import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'theme'
import Routes from 'routes'

const App = ({ ...props }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes {...props} />
  </ThemeProvider>
)

export default App
