import { TOGGLE_SIDEBAR, API_COUNT, APP_REQUEST, APP_REQUEST_FAILED } from '../types'
import { getApiCountByCurDate } from '../../api/app'

const state = {
  sidebar: {
    opened: true
  },
  apiCount: 0,
  isFetching: false
}

const actions = {
  getApiCount ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(APP_REQUEST)
      getApiCountByCurDate(payload).then(res => {
        commit(API_COUNT, {
          apiCount: res.data.count
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
  [API_COUNT] (state, payload) {
    state.apiCount = payload.apiCount
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
