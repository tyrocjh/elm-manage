import { USER_LIST } from '../types'

const state = {
  isFetching: false,
  items: []
}

const actions = {
  getUserList ({ commit }) {
    commit(USER_LIST, {
      userList: [{
        name: 'tyro',
        address: 'gz'
      }]
    })
  }
}

const mutations = {
  [USER_LIST] (state, payload) {
    state.isFetching = false
    state.items = payload.userList
  }
}

export default {
  state,
  actions,
  mutations
}
