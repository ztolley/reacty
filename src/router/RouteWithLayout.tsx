/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeycloak } from '@react-keycloak/web'
import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface RouteWithLayoutProps extends RouteProps {
  component: React.FC<any> | React.ComponentClass<any, any>
  isPrivate?: boolean
  layout: React.FC<any> | React.ComponentClass<any, any>
}

/**
 *
 * An extension of the standard Router component that allows a common layout
 * to be applied to multiple pages.
 *
 * The isPrivate method also allows a route to be protected and require authentication
 */
export const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  component: Component,
  isPrivate,
  layout: Layout,
  ...rest
}) => {
  const {
    keycloak: { authenticated },
  } = useKeycloak()

  if (isPrivate && !authenticated) {
    return null
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
