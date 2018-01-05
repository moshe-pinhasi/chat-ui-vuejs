'user strict'

import UserService from '../services/UserService'
import store from 'store'

const SET_USER = 'user/set_user'
export const CONNECT = 'user/connect'
export const DISCONNECT = 'user/disconnect'

export default {
  state: {
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    [SET_USER] (state, {user}) {
      state.user = user
    }
  },
  actions: {
    [CONNECT] ({commit}, {username}) {
      const user = UserService.getUserObj(username)
      store.set('user', user)
      commit({type: SET_USER, user})
    },
    [DISCONNECT] ({commit}) {
      store.remove('user')
      commit({type: SET_USER, user: null})
    }
  }
}
