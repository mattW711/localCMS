import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    title: null
  },
  mutations: {
    [mutations.SET_TITLE] (state, title) {
      state.title = title
    }
  },
  actions: {
    setTitle ({commit}, title) {
      commit(mutations.SET_TITLE, title)
    }
  },
  getters: {
    title: state => state.title
  }
}
