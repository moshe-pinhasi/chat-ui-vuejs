'user strict'

import UserService from '../services/UserService'
import store from 'store'

const SET_USER = 'user/set_user'
export const CONNECT = 'user/connect'
export const DISCONNECT = 'user/disconnect'
export const LOAD_USER = 'user/load_user'

export default {
  state: {
    user: null,
    connected: false
  },
  getters: {
    user: state => state.user,
    connected: state => state.connected
  },
  mutations: {
    [SET_USER] (state, {user, connected}) {
      state.user = user
      state.connected = connected
    }
  },
  actions: {
    [CONNECT] ({commit}, {username}) {
      const user = UserService.getUserObj(username)
      store.set('user', user)
      commit({type: SET_USER, user, connected: true})
    },
    [DISCONNECT] ({commit}) {
      store.remove('user')
      commit({type: SET_USER, user: null, connected: false})
    },
    [LOAD_USER] ({commit}) {
      const user = store.get('user')
      if (user) {
        commit({type: SET_USER, user, connected: true})
      }
    }
  }
}
