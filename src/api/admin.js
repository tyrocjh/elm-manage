import fetch from '@/utils/fetch'

export function login (data) {
  return fetch({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function signout () {
  return fetch({
    url: '/admin/singout',
    method: 'get'
  })
}

export function getAdminInfo () {
  return fetch({
    url: '/admin/info',
    method: 'get'
  })
}

export function getAdminList (params) {
  return fetch({
    url: '/admin/all',
    method: 'get',
    params
  })
}

export function getAdminCount () {
  return fetch({
    url: '/admin/count',
    method: 'get'
  })
}

export function getAdminCountByCurDate (date) {
  return fetch({
    url: '/statis/admin/' + date + '/count',
    method: 'get'
  })
}
