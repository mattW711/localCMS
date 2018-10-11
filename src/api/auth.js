// import axios from 'axios'
import fakeResponse from '../utils/fakeResponse'

export default {
  login (credentials) {
    // return axios.post('/v1/auth/login', credentials)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials) {
          resolve(fakeResponse.login)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  },
  verifyToken (token) {
    return new Promise((resolve, reject) => {
      if (token) {
        resolve(fakeResponse.user)
      } else {
        reject(new Error('Unauthenticated'))
      }
    })
  }
}
