import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import UserLogin from '@/components/UserLogin'
import { SET_USER, CONNECT, DISCONNECT } from '@/store/UserModule'
import UserService from '@/services/UserService'
import { mount } from 'avoriaz'
import 'babel-polyfill'

Vue.use(Vuelidate)
Vue.use(Vuex)

describe('UserLogin.vue', () => {
  const username = 'moshe'
  let store, component

  beforeEach(() => {
    store = new Vuex.Store({
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
          commit({type: SET_USER, user, connected: true})
        },
        [DISCONNECT] ({commit}) {
          commit({type: SET_USER, user: null, connected: false})
        }
      }
    })
  })

  function initComponent () {
    component = mount(UserLogin, { store })
    component.setData({ username })
  }

  function clickButton () {
    component.find('button')[0].trigger('click')
  }

  it('should make login', () => {
    initComponent()
    clickButton()

    expect(store.state.user.username).to.equal(username)
    expect(store.state.connected).to.equal(true)
  })

  it('should make logout', () => {
    initComponent()
    clickButton() // login
    clickButton() // logout

    expect(store.state.user).to.equal(null)
    expect(store.state.connected).to.equal(false)
  })
})
