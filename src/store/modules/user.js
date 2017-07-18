import { USER_LIST, USER_COUNT, USER_PAGINATION } from '../types'
import { getUserList, getUserCount } from '../../api/user'

const state = {
  isFetching: false,
  list: [],
  count: 0,
  currentPage: 1,
  offset: 0,
  limit: 20
}

const actions = {
  getUserList ({ commit }, payload) {
    getUserList(payload).then(response => {
      commit(USER_LIST, {
        userList: response.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  getUserCount ({ commit }) {
    getUserCount().then(response => {
      commit(USER_COUNT, {
        userCount: response.data.count
      })
    }).catch(err => {
      console.log(err)
    })
  },
  currentChange ({ commit }, val) {
    commit(USER_PAGINATION, val)
  }
}

const mutations = {
  [USER_LIST] (state, payload) {
    state.isFetching = false
    state.list = payload.userList
  },
  [USER_COUNT] (state, payload) {
    state.isFetching = false
    state.count = payload.userCount
  },
  [USER_PAGINATION] (state, val) {
    state.currentPage = val
    state.offset = (val - 1) * state.limit
  }
}

export default {
  state,
  actions,
  mutations
}
