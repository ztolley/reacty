import React from 'react'
import { Link } from 'react-router-dom'

import { PlatformDetail } from '../sections'

export const PlatformDetailPage: React.FC = () => {
  return (
    <>
      <PlatformDetail />
      <Link to="/">&lt;- Back</Link>
    </>
  )
}
