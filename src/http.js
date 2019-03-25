import axios from 'axios'

export const baseUrl = process.env.VUE_APP_API_URL || ''

export default axios.create({
  baseURL: baseUrl
})
