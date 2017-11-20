let baseUrl = ''
let baseImgPath = 'http://images.cangdu.org/'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080/api'
} else {
  baseUrl = 'http://cangdu.org:8001'
}

export {
  baseUrl,
  baseImgPath
}
