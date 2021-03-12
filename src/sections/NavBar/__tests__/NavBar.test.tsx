import { ReactKeycloakProvider } from '@react-keycloak/web'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'

import { createKeycloakStub } from '../../../tests'
import { NavBar } from '..'

describe('NavBar', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    const keycloak = createKeycloakStub({
      given_name: 'Fred',
      family_name: 'Smith',
      name: 'Fred Smith',
      email: 'fred@smith.org',
    })

    wrapper = render(
      <ReactKeycloakProvider authClient={keycloak}>
        <MemoryRouter initialEntries={['/']}>
          <Route path="/">
            <NavBar />
          </Route>
        </MemoryRouter>
      </ReactKeycloakProvider>
    )
  })

  it('should display the user name', () => {
    expect(wrapper.getByTestId('navbar-username')).toHaveTextContent(
      'Fred Smith'
    )
  })
})
