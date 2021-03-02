import React from 'react'
import { Link } from 'react-router-dom'

import { Platform } from '../../types'

export const PlatformRow: React.FC<{ platform: Platform }> = ({ platform }) => (
  <li>
    <Link to={`/platform/${platform.id}`}>{platform.name}</Link>
  </li>
)
