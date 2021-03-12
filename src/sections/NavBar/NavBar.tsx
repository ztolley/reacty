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
      <div>Reacty</div>
      <div>
        {name}
        <br />
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
