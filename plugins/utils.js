import Vue from 'vue'

// ユーザーのデバイス判定
export function $getDevice() {
  var ua = navigator.userAgent
  if (
    ua.indexOf('iPhone') > 0 ||
    ua.indexOf('iPod') > 0 ||
    (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
  ) {
    return 'sp'
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    return 'tab'
  } else {
    return 'other'
  }
}

const utils = {}

utils.install = function(Vue) {
  Vue.prototype.$getDevice = $getDevice
}

Vue.use(utils)
