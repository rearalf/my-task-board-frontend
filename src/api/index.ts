import axios from 'axios'

const instance = axios.create({
  url: import.meta.env.VITE_API_URL + '' + import.meta.env.VITE_URL_VERSION + '/api',
  baseURL: import.meta.env.VITE_API_URL + '' + import.meta.env.VITE_URL_VERSION + '/api',
})

export default instance
