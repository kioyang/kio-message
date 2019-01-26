import KioMessage from './packages/message/index.js'

const install = function(Vue) {
  Vue.component(KioMessage.name, KioMessage)
  Vue.prototype.$kio_message = KioMessage.installMessage
}
export default install
