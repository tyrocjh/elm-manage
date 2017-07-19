import { GRAPH_USER_DISTRIBUTION, GRAPH_REQUEST, GRAPH_REQUEST_FAILED } from '../types'
import { getUserDistribution } from '../../api/graph'

const state = {
  userDistribution: '',
  isFetching: false
}

const actions = {
  getUserDistribution ({ commit }) {
    commit(GRAPH_REQUEST)
    getUserDistribution().then(res => {
      commit(GRAPH_USER_DISTRIBUTION, {
        userDistribution: res.data.user_city
      })
      commit(GRAPH_REQUEST_FAILED)
    })
  }
}

const mutations = {
  [GRAPH_USER_DISTRIBUTION] (state, payload) {
    state.isFetching = false
    state.userDistribution = payload.userDistribution
  },
  [GRAPH_REQUEST] (state) {
    state.isFetching = true
  },
  [GRAPH_REQUEST_FAILED] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
