import React from 'react'
import { Route } from 'react-router'
import { Routes, Navigate } from 'react-router-dom'

import { URL } from 'constants/navigation'

import Home from 'containers/Home'

const RoutesComponents = () => (
  <Routes>
    <Route path="/" element={<Navigate to={URL.HOME} />} />
    <Route path={URL.HOME} element={<Home />} exact />
  </Routes>
)

export default RoutesComponents
