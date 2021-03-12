import { ReactKeycloakProvider } from '@react-keycloak/web'
import Keycloak from 'keycloak-js'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { DefaultLayout } from './layouts'
import { HomePage, PlatformDetailPage } from './pages'
import { RouteWithLayout } from './router'

const keycloak = Keycloak({
  url:
    process.env.REACT_APP_KEYCLOAK_URL || 'https://auth.therapywaffle.com/auth',
  realm: process.env.REACT_APP_KEYCLOAK_REALM || 'therapywaffle',
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || 'reacty',
})

export const App: React.FC = () => (
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{ onLoad: 'login-required' }}
  >
    <Router>
      <RouteWithLayout
        exact
        isPrivate
        path="/"
        component={HomePage}
        layout={DefaultLayout}
      />
      <RouteWithLayout
        exact
        isPrivate
        path="/platform/:id"
        component={PlatformDetailPage}
        layout={DefaultLayout}
      />
    </Router>
  </ReactKeycloakProvider>
)
