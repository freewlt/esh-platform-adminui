/**
 * Created by Administrator on 2018/7/13.
 */

import axios from 'axios'
import { Loading, Message } from 'element-ui'
const locationURL = 'http://localhost:3000'

const config = {
  baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_API : locationURL,
  timeout: 1000
}

const service = axios.create(config)

// loading进度条设置
let globalLoading

function startLoading () {
  globalLoading = Loading.service({
    lock: true,
    text: '加载中…',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () {
  setTimeout(() => {
    globalLoading.close()
  }, 2000)
}

let needLoadingRequestCount = 0
export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// http request 拦截器
service.interceptors.request.use(
  config => {
    // showFullScreenLoading()
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    } else {
      Message.error('错误信息')
    }
  }, error => {
    const { response = {} } = error
    if (response.data) {
      Message.error(response.data)
    } else {
      Message.error('错误信息')
    }
    return Promise.reject(error.response)
  }
)

const wLoading = (callback, showLoading) => {
  return new Promise((resolve, reject) => {
    showLoading(true)
    callback().then(response => {
      showLoading(false)
      resolve(response.data)
    }, err => {
      showLoading(false)
      reject(err)
    })
  })
}

const get = (url, params = {}, { showLoading } = { showLoading: () => {} }) => {
  return wLoading(() => service.get(url, { params, showLoading }), showLoading)
}

const post = (url, data, showLoading = () => {}) => {
  return wLoading(() => service.post(url, data, { showLoading }), showLoading)
}

const patch = (url, data, showLoading = () => {}) => {
  return wLoading(() => service.patch(url, data, { showLoading }), showLoading)
}

const put = (url, data, showLoading = () => {}) => {
  return wLoading(() => service.put(url, data, { showLoading }), showLoading)
}

export { get, post, put, patch }
export default service
