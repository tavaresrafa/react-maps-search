import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import HttpsRedirect from 'react-https-redirect'

import CircularProgress from '@mui/material/CircularProgress'

import AppProvider from 'context/AppProvider'
import browserHistory from 'browserHistory'
import App from 'App'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <HttpsRedirect>
    <Suspense
      fallback={
        <CircularProgress variant="indeterminate" size={70} thickness={5} />
      }
    >
      <Router history={browserHistory}>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </Suspense>
  </HttpsRedirect>
)
