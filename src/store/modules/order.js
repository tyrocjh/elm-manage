import { ORDER_COUNT, ORDER_COUNT_CUR_DATE, ORDER_REQUEST, ORDER_REQUEST_FAILED } from '../types'
import { getOrderCount, getOrderCountByCurDate } from '@/api/order'

const state = {
  count: 0,
  countByCurDate: 0,
  isFetching: false
}

const actions = {
  getOrderCount ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ORDER_REQUEST)
      getOrderCount(payload).then(res => {
        commit(ORDER_COUNT, {
          count: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(ORDER_REQUEST_FAILED)
        reject(err)
      })
    })
  },
  getOrderCountByCurDate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ORDER_REQUEST)
      getOrderCountByCurDate(payload).then(res => {
        commit(ORDER_COUNT_CUR_DATE, {
          countByCurDate: res.data.count
        })
        resolve(res)
      }).catch(err => {
        commit(ORDER_REQUEST_FAILED)
        reject(err)
      })
    })
  }
}

const mutations = {
  [ORDER_COUNT] (state, payload) {
    state.count = payload.count
  },
  [ORDER_COUNT_CUR_DATE] (state, payload) {
    state.countByCurDate = payload.countByCurDate
  },
  [ORDER_REQUEST] (state) {
    state.isFetching = true
  },
  [ORDER_REQUEST_FAILED] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
