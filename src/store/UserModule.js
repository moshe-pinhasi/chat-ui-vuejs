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
    conncted: false
  },
  getters: {
    user: state => state.user,
    conncted: state => state.conncted
  },
  mutations: {
    [SET_USER] (state, {user, conncted}) {
      state.user = user
      state.conncted = conncted
    }
  },
  actions: {
    [CONNECT] ({commit}, {username}) {
      const user = UserService.getUserObj(username)
      store.set('user', user)
      commit({type: SET_USER, user, conncted: true})
    },
    [DISCONNECT] ({commit}) {
      store.remove('user')
      commit({type: SET_USER, user: null, conncted: false})
    },
    [LOAD_USER] ({commit}) {
      const user = store.get('user')
      if (user) {
        commit({type: SET_USER, user, conncted: true})
      }
    }
  }
}
