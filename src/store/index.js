import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import admin from './modules/admin'
import user from './modules/user'
import order from './modules/order'
import graph from './modules/graph'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    admin,
    user,
    order,
    graph
  }
})
