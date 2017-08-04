import fetch from '../utils/fetch'

export function getApiCountByCurDate (date) {
  return fetch({
    url: '/statis/api/' + date + '/count',
    method: 'get'
  })
}
