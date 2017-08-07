import { ORDER_LIST, ORDER_COUNT, ORDER_COUNT_CUR_DATE, ORDER_PAGINATION, ORDER_REQUEST, ORDER_REQUEST_FAILED } from '../types'
import { getOrderList, getOrderCount, getOrderCountByCurDate } from '@/api/order'

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
  getOrderList ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ORDER_REQUEST)
      getOrderList(payload).then(res => {
        console.info('res: ', res)
        commit(ORDER_LIST, {
          orderList: res.data
        })
        resolve(res)
      }).catch(err => {
        commit(ORDER_REQUEST_FAILED)
        reject(err)
      })
    })
  },
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
  },
  currentChange ({ commit }, val) {
    commit(ORDER_PAGINATION, val)
  }
}

const mutations = {
  [ORDER_LIST] (state, payload) {
    state.isFetching = false
    state.list = payload.orderList
  },
  [ORDER_COUNT] (state, payload) {
    state.count = payload.count
  },
  [ORDER_COUNT_CUR_DATE] (state, payload) {
    state.countByCurDate = payload.countByCurDate
  },
  [ORDER_PAGINATION] (state, val) {
    state.currentPage = val
    state.offset = (val - 1) * state.limit
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
