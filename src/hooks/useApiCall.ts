import { useKeycloak } from '@react-keycloak/web'
import axios, { Method } from 'axios'
import { useEffect, useState } from 'react'

interface ApiCallParams {
  url: string
  method?: Method
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

interface ApiCallResult<T> {
  loading: boolean
  error?: string
  data?: T
}

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  'https://react-rest.therapywaffle.com/api'

export const useApiCall = <T>({
  method,
  url,
  data: postData,
}: ApiCallParams): ApiCallResult<T> => {
  const [{ data, error, loading }, setState] = useState<{
    data?: T
    error?: string
    loading: boolean
  }>({ loading: true })

  // Load the current authentication token for use in API Requests
  const {
    keycloak: { token },
  } = useKeycloak()

  useEffect(() => {
    const apiUrl = url.toLowerCase().startsWith('http')
      ? url
      : `${API_BASE_URL}${url}`

    axios
      .request<T>({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: method || 'GET',
        url: apiUrl,
        data: postData,
      })
      .then((response) => {
        setState({
          data: response.data,
          loading: false,
        })
      })
      .catch((exception) => {
        setState({
          error: exception.message,
          loading: false,
        })
      })
  }, [])

  return {
    data,
    error,
    loading,
  }
}
