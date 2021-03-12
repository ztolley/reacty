import React from 'react'
import { useParams } from 'react-router-dom'
import { usePlatform } from '../../hooks'

export const PlatformDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, loading } = usePlatform({ id })


  return (
    <div data-testid="platform-detail">
      <h2>Platform Detail</h2>
      {error && <p data-testid="platform-detail-error">{error}</p>}
      {loading && <p data-testid="platform-detail-loading">Loading</p>}
      {data && (
        <dl data-testid="platform-detail-data">
          <dt>Name:</dt>
          <dd data-testid="platform-detail-name">{data.name}</dd>
          <dt>Platform manager:</dt>
          <dd data-testid="platform-detail-platformManager">
            {data.platformManager}
          </dd>
          <dt>Representative:</dt>
          <dd data-testid="platform-detail-representative">
            {data.representative}
          </dd>
        </dl>
      )}
    </div>
  )
}
