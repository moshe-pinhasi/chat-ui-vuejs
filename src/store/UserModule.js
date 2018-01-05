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
    connceted: false
  },
  getters: {
    user: state => state.user,
    connceted: state => state.connceted
  },
  mutations: {
    [SET_USER] (state, {user, connceted}) {
      state.user = user
      state.connceted = connceted
    }
  },
  actions: {
    [CONNECT] ({commit}, {username}) {
      const user = UserService.getUserObj(username)
      store.set('user', user)
      commit({type: SET_USER, user, connceted: true})
    },
    [DISCONNECT] ({commit}) {
      store.remove('user')
      commit({type: SET_USER, user: null, connceted: false})
    },
    [LOAD_USER] ({commit}) {
      const user = store.get('user')
      if (user) {
        commit({type: SET_USER, user, connceted: true})
      }
    }
  }
}
