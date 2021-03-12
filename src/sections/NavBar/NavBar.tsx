import { useKeycloak } from '@react-keycloak/web'
import { KeycloakTokenParsed } from 'keycloak-js'
import React from 'react'

export const NavBar: React.FC = () => {
  const { keycloak } = useKeycloak()

  const tokenParsed: KeycloakTokenParsed | undefined = keycloak.tokenParsed

  const name = tokenParsed
    ? `${tokenParsed?.given_name} ${tokenParsed?.family_name}`.trim()
    : ''

  const onLogout = () => {
    keycloak.logout()
  }

  return (
    <div>
      <h1 data-testid="navbar-title">Reacty</h1>
      <div data-testid="navbar-username">{name}</div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
