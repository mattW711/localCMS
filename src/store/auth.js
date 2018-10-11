import mutations from './mutations'
import api, { setAccessToken } from '../api'

export default {
  namespaced: true,
  state: {
    authenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null
  },
  mutations: {
    [mutations.LOADING] (state) {
      state.loading = true
    },
    [mutations.LOADED] (state) {
      state.loading = false
    },
    [mutations.SET_USER] (state, user) {
      state.user = user
    },
    [mutations.SET_TOKEN] (state, token) {
      state.token = token
    },
    [mutations.SET_ERROR] (state, error) {
      state.error = error
    },
    [mutations.AUTHENTICATED] (state) {
      state.authenticated = true
    },
    [mutations.UNAUTHENTICATED] (state) {
      state.authenticated = false
    }
  },
  actions: {
    login ({commit}, credentials) {
      commit(mutations.LOADING)
      return api.auth.login(credentials).then(({data}) => {
        commit(mutations.LOADED)
        if (data.code === 200) {
          commit(mutations.SET_TOKEN, data.meta.token)
          const user = data.data
          delete data.token
          commit(mutations.SET_USER, user)
          commit(mutations.AUTHENTICATED)
          return true
        } else {
          commit(mutations.SET_ERROR, data)
          commit(mutations.UNAUTHENTICATED)
          return false
        }
      }).catch(err => {
        commit(mutations.LOADED)
        commit(mutations.UNAUTHENTICATED)
        commit(mutations.SET_ERROR, err)
      })
    },
    async verifyToken ({commit, state}) {
      const token = state.token
      if (token) {
        setAccessToken(token)
        const {data} = await api.auth.verifyToken(token)
        if (data.code === 200) {
          commit(mutations.AUTHENTICATED)
          commit(mutations.SET_USER, data.data)
        } else {
          commit(mutations.UNAUTHENTICATED)
          commit(mutations.SET_USER, null)
          commit(mutations.SET_TOKEN, null)
          commit(mutations.SET_ERROR, data)
        }
      } else {
        commit(mutations.UNAUTHENTICATED)
        commit(mutations.SET_USER, null)
        commit(mutations.SET_TOKEN, null)
      }
    },
    logout ({commit}) {
      return new Promise(resolve => {
        commit(mutations.UNAUTHENTICATED)
        commit(mutations.SET_USER, null)
        commit(mutations.SET_TOKEN, null)
        commit(mutations.SET_ERROR, null)
        resolve(true)
      })
    }
  },
  getters: {
    isLoggedIn: state => state.authenticated,
    user: state => state.user,
    token: state => state.token,
    isLoading: state => state.loading,
    error: state => {
      if (state.error && state.error.response) {
        return state.error.response.data
      }
      return state.error
    }
  }
}
