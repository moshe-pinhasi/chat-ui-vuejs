import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import UserModule from './UserModule'
import createChatModule from './ChatModule'

const socket = socketio('https://spotim-demo-chat-server.herokuapp.com')
const ChatModule = createChatModule(socket)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    chat: ChatModule
  },
  strict: true
})

Vue.use(VueSocketio, socket, store)

export default store
