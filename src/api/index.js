import axios from 'axios'
import auth from './auth'

export const TOKEN_NAME = 'token'

axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const setAccessToken = (token) => {
  axios.defaults.headers.common[TOKEN_NAME] = token
}

if (localStorage[TOKEN_NAME] !== null) {
  const token = localStorage.getItem(TOKEN_NAME)
  setAccessToken(token)
}

export default {
  auth
}
