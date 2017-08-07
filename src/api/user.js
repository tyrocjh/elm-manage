import fetch from '@/utils/fetch'

export function getUserList (params) {
  return fetch({
    url: '/v1/users/list',
    method: 'get',
    params
  })
}

export function getUserCount () {
  return fetch({
    url: '/v1/users/count',
    method: 'get'
  })
}

export function getUserCountByCurDate (date) {
  return fetch({
    url: '/statis/user/' + date + '/count',
    method: 'get'
  })
}
