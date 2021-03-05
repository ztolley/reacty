import axios, { Method } from 'axios'
import { useEffect, useState } from 'react'

interface ApiCallParams {
  url: string
  method?: Method
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

  useEffect(() => {
    const apiUrl = url.toLowerCase().startsWith('http')
      ? url
      : `${API_BASE_URL}${url}`

    console.log('API Call: ', apiUrl)

    axios
      .request<T>({
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
  }, [data, method, url])

  return {
    data,
    error,
    loading,
  }
}
