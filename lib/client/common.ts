import axios, { ResponseType } from 'axios'

const headers = { 'Content-Type': 'application/json; charset=UTF-8' }

const client = axios.create({
  headers,
})

const get = async <T>(
  path: string,
  params: Record<string, any> = {},
  headers: Record<string, string> = {},
  responseType: ResponseType = 'json'
): Promise<T> => {
  try {
    const resp = await client.get<T>(path, { params, headers, responseType })
    return resp.data
  } catch (error: any) {
    if (error.response) {

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)

      if (
        error.response.status !== 404 &&
        !path.includes('ticket-categories') &&
        !path.includes('configuration') &&
        typeof window !== 'undefined'
      )
        // window.location.href = `/error?errorCode=${error.response?.data?.errorCode || ENUM_ERROR_CODE.OTHERS}`

        throw error.response.data
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message', error.message)
    }
    console.log(error.config)
    throw error
  }
}

const post = async <T>(
  path: string,
  params: Record<string, any> = {},
  data: Record<string, any> = {},
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    const resp = await client.post<T>(path, data, { headers, params })
    return resp.data
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response?.data?.error?.details)
      console.log(error.response.status)
      console.log(error.response.headers)

      if (path.includes('orders') && typeof window !== 'undefined')
        // window.location.href = `/error?errorCode=${ENUM_ERROR_CODE.ORDER} `
        // else if (typeof window !== 'undefined')
        // window.location.href = `/error?errorCode=${error.response?.data?.errorCode || ENUM_ERROR_CODE.OTHERS} `

        throw error.response.data
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)

    throw error
  }
}

const remove = async <T>(
  path: string,
  params: Record<string, any> = {},
  data: Record<string, any> = {},
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    const resp = await client.delete<T>(path, { headers, params, data })
    return resp.data
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response?.data?.error?.details)
      console.log(error.response.status)
      console.log(error.response.headers)

      throw error.response.data.error
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error.config)
    throw error.response.data
  }
}

export { get, post, remove }
