import React, { createContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import { SERVER_URL } from 'lib/config'

const headers = { 'Content-Type': 'application/json' }

const api = axios.create({
  baseURL: SERVER_URL,
  headers,
  timeout: 200000
})

export const APIContext = createContext()

export const APIProvider = ({ children }) => {
  const value = useMemo(() => ({ api }), [])

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

APIProvider.propTypes = {
  children: PropTypes.node
}
