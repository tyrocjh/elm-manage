import { ADMIN_INFO, ADMIN_REQUEST, ADMIN_REQUEST_FAILED } from '../types'
import { login, getAdminInfo } from '../../api/admin'

const state = {
  info: '',
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
  }
}

const mutations = {
  [ADMIN_INFO] (state, payload) {
    state.isFetching = false
    state.info = payload.info.data
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
