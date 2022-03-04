import axios, { ResponseType } from 'axios'

const baseURL = process.env.API_URL || 'https://dummyapi.io/data/v1'
// const baseURL = process.env.API_URL || 'https://test-nextix-gateway-api.rocket.nexpando.com'
const app_id = process.env.APP_ID || '62160254d32992820c08cd2e'

if (!baseURL) throw new Error('API_URL not defined!')

const headers = { 'Content-Type': 'application/json; charset=UTF-8' }

const client = axios.create({
  baseURL,
  headers,
})

const get = async <T>(
  path: string,
  params: Record<string, any> = {},
  headers: Record<string, string> = {},
  responseType: ResponseType = 'json'
): Promise<T> => {
  try {
    headers['app-id'] = app_id
    const resp = await client.get<T>(path, { params, headers, responseType })
    return resp.data
  } catch (error: any) {
    console.log('error.config', error.config)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('error.response.data', error.response.data)
      console.log('error.response.status', error.response.status)
      console.log('error.response.headers', error.response.headers)
      throw error.response.data.error
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
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
      throw error.response.data.error
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
    throw error.response.data
  }
}


export { get, post }
