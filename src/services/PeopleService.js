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
  getTotalPeoples() {
    return apiClient.get('/peoples')
  },
  getPeople(id) {
    return apiClient.get('/peoples/' + id)
  },
  getPeoples(perPage, page) {
    return apiClient.get('/peoples?_limit=' + perPage + '&_page=' + page)
  }
}
