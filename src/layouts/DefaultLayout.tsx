import React from 'react'

import { NavBar } from '../sections'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}
