import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8'

const axiosInstance = axios.create({
  timeout: 10000
})

axiosInstance.interceptors.request.use(
  (config:any) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        'X-API-KEY': '7a232709-5eea-4768-b0ac-47ee6a61ce94'
      }
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
)

const requestObj = {
  get: <ResponseType = unknown>(
    url: string,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.get(url, options)
  },
  delete: <ResponseType = unknown>(
    url: string,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.delete(url, options)
  },
  post: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.post(url, data, options)
  },
  put: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.put(url, data, options)
  },
  patch: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.patch(url, data, options)
  }
}

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown> & {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  }
): Promise<ResponseType> => {
  const method = options?.method ?? 'GET'

  if (method === 'GET') {
    return requestObj.get<ResponseType>(url, options)
  }
  if (method === 'DELETE') {
    return requestObj.delete<ResponseType>(url, options)
  }
  if (method === 'POST') {
    return requestObj.post<ResponseType>(url, options?.data, options)
  }
  if (method === 'PUT') {
    return requestObj.put<ResponseType>(url, options?.data, options)
  }
  if (method === 'PATCH') {
    return requestObj.patch<ResponseType>(url, options?.data, options)
  }

  return requestObj.get<ResponseType>(url, options)
}

export { axiosInstance, request }