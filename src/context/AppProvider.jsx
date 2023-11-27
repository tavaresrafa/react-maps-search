import React from 'react'
import PropTypes from 'prop-types'

import { APIProvider } from './APIContext'
import { UIProvider } from './UIContext'

const AppProvider = ({ children }) => (
  <APIProvider>
    <UIProvider>{children}</UIProvider>
  </APIProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProvider
