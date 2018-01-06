'use strict'

const ADD_MESSGAE = 'chat/addMessage'
export const SOCKET_SPOTIM_CHAT = 'socket_spotimChat'

export default {
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
    }
  }
}
