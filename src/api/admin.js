import fetch from '../utils/fetch'

export function login (data) {
  return fetch({
    url: '/admin/login',
    method: 'post',
    data
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
