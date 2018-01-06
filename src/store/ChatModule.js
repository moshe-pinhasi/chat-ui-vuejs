'use strict'

import UserService from '../services/UserService'

const ADD_MESSGAE = 'chat/addMessage'
const SOCKET_SPOTIM_CHAT = 'socket_spotimChat'
export const SEND_MESSGAE = 'chat/sendMessage'

export default function createChatModule (socket) {
  return {
    state: {
      connected: false,
      messages: []
    },
    getters: {
      messages: state => state.messages
    },
    mutations: {
      'SOCKET_CONNECT': (state) => {
        state.connected = true
      },
      'SOCKET_DISCONNECT': (state) => {
        state.connected = false
      },
      [ADD_MESSGAE]: (state, message) => {
        state.messages.push(message)
      }
    },
    actions: {
      [SOCKET_SPOTIM_CHAT]: (context, message) => {
        context.commit(ADD_MESSGAE, message)
      },
      [SEND_MESSGAE]: ({rootGetters}, { message }) => {
        const messageObj = UserService.getUserMessage(rootGetters.user, message)
        socket.emit('spotim/chat', messageObj)
      }
    }
  }
}
