import fetch from '@/utils/fetch'

export function getUserDistribution () {
  return fetch({
    url: '/v1/user/city/count',
    method: 'get'
  })
}
