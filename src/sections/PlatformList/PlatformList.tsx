import React from 'react'

import { usePlatforms } from '../../hooks'
import { PlatformRow } from './PlatformRow'

export const PlatformList: React.FC = () => {
  const { data, error, loading } = usePlatforms()

  return (
    <>
      <h2>Platform List</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
      <ul>
        {data &&
          data.map((platform) => (
            <PlatformRow key={platform.id} platform={platform} />
          ))}
      </ul>
    </>
  )
}
