import { TOGGLE_SIDEBAR, API_COUNT_CUR_DATE, API_TOTAL_COUNT, APP_REQUEST, APP_REQUEST_FAILED } from '../types'
import { getApiCountByCurDate, getApiTotalCount } from '@/api/app'

const state = {
  sidebar: {
    opened: true
  },
  apiCountByCurDate: 0,
  apiTotalCount: 0,
  isFetching: false
}

const actions = {
  getApiCountByCurDate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(APP_REQUEST)
      getApiCountByCurDate(payload).then(res => {
        commit(API_COUNT_CUR_DATE, {
          apiCountByCurDate: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(APP_REQUEST_FAILED)
        reject(err)
      })
    })
  },
  getApiTotalCount ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(APP_REQUEST)
      getApiTotalCount(payload).then(res => {
        commit(API_TOTAL_COUNT, {
          apiTotalCount: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(APP_REQUEST_FAILED)
        reject(err)
      })
    })
  },
  toggleSideBar ({ commit }) {
    commit(TOGGLE_SIDEBAR)
  }
}

const mutations = {
  [TOGGLE_SIDEBAR] (state) {
    state.sidebar.opened = !state.sidebar.opened
  },
  [API_COUNT_CUR_DATE] (state, payload) {
    state.apiCountByCurDate = payload.apiCountByCurDate
  },
  [API_TOTAL_COUNT] (state, payload) {
    state.apiTotalCount = payload.apiTotalCount
  },
  [APP_REQUEST] (state) {
    state.isFetching = true
  },
  [APP_REQUEST_FAILED] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
