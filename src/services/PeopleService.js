import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getPeoples() {
    return apiClient.get('/peoples')
  }
}
