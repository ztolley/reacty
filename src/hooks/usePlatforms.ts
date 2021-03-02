import { Platform } from '../types'
import { useApiCall } from './useApiCall'

export const usePlatforms = () => {
  return useApiCall<Platform[]>({ url: '/platform' })
}
