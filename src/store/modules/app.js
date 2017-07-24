import { TOGGLE_SIDEBAR } from '../types'

const state = {
  sidebar: {
    opened: true
  }
}

const actions = {
  toggleSideBar ({ commit }) {
    commit(TOGGLE_SIDEBAR)
  }
}

const mutations = {
  [TOGGLE_SIDEBAR] (state) {
    state.sidebar.opened = !state.sidebar.opened
  }
}

export default {
  state,
  actions,
  mutations
}
