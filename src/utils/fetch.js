import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  withCredentials: true
})

export default service
