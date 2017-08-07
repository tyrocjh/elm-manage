import { ADMIN_INFO, ADMIN_LIST, ADMIN_COUNT, ADMIN_COUNT_CUR_DATE, ADMIN_PAGINATION, ADMIN_REQUEST, ADMIN_REQUEST_FAILED } from '../types'
import { login, signout, getAdminInfo, getAdminList, getAdminCount, getAdminCountByCurDate } from '@/api/admin'

const state = {
  info: {
    avatar: 'default.jpg'
  },
  list: [],
  count: 0,
  countByCurDate: 0,
  currentPage: 1,
  offset: 0,
  limit: 20,
  isFetching: false
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      login(payload).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  signout ({ commit }) {
    return new Promise((resolve, reject) => {
      signout().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getAdminInfo ({ commit }) {
    commit(ADMIN_REQUEST)
    getAdminInfo().then(res => {
      commit(ADMIN_INFO, {
        info: res.data
      })
    }).catch(err => {
      commit(ADMIN_REQUEST_FAILED)
      console.log(err)
    })
  },
  getAdminList ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ADMIN_REQUEST)
      getAdminList(payload).then(res => {
        commit(ADMIN_LIST, {
          adminList: res.data.data
        })
        resolve(res)
      }).catch(err => {
        commit(ADMIN_REQUEST_FAILED)
        reject(err)
      })
    })
  },
  getAdminCount ({ commit }) {
    getAdminCount().then(response => {
      commit(ADMIN_COUNT, {
        adminCount: response.data.count
      })
    }).catch(err => {
      console.log(err)
    })
  },
  getAdminCountByCurDate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ADMIN_REQUEST)
      getAdminCountByCurDate(payload).then(res => {
        commit(ADMIN_COUNT_CUR_DATE, {
          countByCurDate: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(ADMIN_REQUEST_FAILED)
        reject(err)
      })
    })
  },
  currentChange ({ commit }, val) {
    commit(ADMIN_PAGINATION, val)
  }
}

const mutations = {
  [ADMIN_INFO] (state, payload) {
    state.isFetching = false
    state.info = payload.info.data
  },
  [ADMIN_LIST] (state, payload) {
    state.isFetching = false
    state.list = payload.adminList
  },
  [ADMIN_COUNT] (state, payload) {
    state.count = payload.adminCount
  },
  [ADMIN_COUNT_CUR_DATE] (state, payload) {
    state.countByCurDate = payload.countByCurDate
  },
  [ADMIN_PAGINATION] (state, val) {
    state.currentPage = val
    state.offset = (val - 1) * state.limit
  },
  [ADMIN_REQUEST] (state) {
    state.isFetching = true
  },
  [ADMIN_REQUEST_FAILED] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
