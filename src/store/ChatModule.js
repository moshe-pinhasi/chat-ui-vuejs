'use strict'

const ADD_MESSGAE = 'chat/addMessage'

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
    'socket_spotimChat': (context, message) => {
      context.commit(ADD_MESSGAE, message)
    }
  }
}
