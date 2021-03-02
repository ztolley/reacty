import React from 'react'
import { useParams } from 'react-router-dom'
import { usePlatform } from '../../hooks'

export const PlatformDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, loading } = usePlatform({ id })

  return (
    <>
      <h2>Platform Detail</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
      {data && (
        <dl>
          <dt>Name:</dt>
          <dd>{data.name}</dd>
          <dt>Platform manager:</dt>
          <dd>{data.platformManager}</dd>
          <dt>Representative:</dt>
          <dd>{data.representative}</dd>
        </dl>
      )}
    </>
  )
}
