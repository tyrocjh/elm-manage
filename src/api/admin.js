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
