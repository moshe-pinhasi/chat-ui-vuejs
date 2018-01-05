import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './UserModule'
import ChatModule from './ChatModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    chat: ChatModule
  },
  strict: true
})
