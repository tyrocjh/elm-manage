import fetch from '@/utils/fetch'

export function getOrderCountByCurDate (date) {
  return fetch({
    url: '/statis/order/' + date + '/count',
    method: 'get'
  })
}

export function getOrderCount () {
  return fetch({
    url: '/bos/orders/count',
    method: 'get'
  })
}
