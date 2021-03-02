import { Platform } from '../types'
import { useApiCall } from './useApiCall'

export const usePlatform = ({ id }: { id: string }) => {
  return useApiCall<Platform>({ url: `/platform/${id}` })
}
