import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    user: null,
    users: [
      {
        id: 1,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User',
        email: 'me@example.com'
      }, {
        id: 2,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 1',
        email: 'me@example.com'
      }, {
        id: 3,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 2',
        email: 'me@example.com'
      }, {
        id: 4,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 3',
        email: 'me@example.com'
      }, {
        id: 5,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 4',
        email: 'me@example.com'
      }, {
        id: 6,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 5',
        email: 'me@example.com'
      }, {
        id: 7,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 6',
        email: 'me@example.com'
      }, {
        id: 8,
        avatar: 'http://via.placeholder.com/80x80',
        name: 'User 7',
        email: 'me@example.com'
      }
    ]
  },
  mutations: {
    [mutations.SET_USERS] (state, users) {
      state.users = users
    }
  },
  actions: {
    find ({commit, state}, id) {
      const user = state.users.find(item => item.id === id)
      commit(mutations.SET_USER, user)
    }
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user
  }
}
