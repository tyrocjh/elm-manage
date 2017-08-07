import { USER_LIST, USER_COUNT, USER_COUNT_CUR_DATE, USER_PAGINATION, USER_REQUEST, USER_REQUEST_FAILED } from '../types'
import { getUserList, getUserCount, getUserCountByCurDate } from '@/api/user'

const state = {
  list: [],
  count: 0,
  countByCurDate: 0,
  currentPage: 1,
  offset: 0,
  limit: 20,
  isFetching: false
}

const actions = {
  getUserList ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST)
      getUserList(payload).then(res => {
        commit(USER_LIST, {
          userList: res.data
        })
        resolve(res)
      }).catch(err => {
        commit(USER_REQUEST_FAILED)
        reject(err)
      })
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
  getUserCountByCurDate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST)
      getUserCountByCurDate(payload).then(res => {
        commit(USER_COUNT_CUR_DATE, {
          countByCurDate: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(USER_REQUEST_FAILED)
        reject(err)
      })
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
    state.count = payload.userCount
  },
  [USER_COUNT_CUR_DATE] (state, payload) {
    state.countByCurDate = payload.countByCurDate
  },
  [USER_PAGINATION] (state, val) {
    state.currentPage = val
    state.offset = (val - 1) * state.limit
  },
  [USER_REQUEST] (state) {
    state.isFetching = true
  },
  [USER_REQUEST_FAILED] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
