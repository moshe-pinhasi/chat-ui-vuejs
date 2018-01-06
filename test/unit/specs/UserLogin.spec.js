import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import UserLogin from '@/components/UserLogin'
import UserModule from '@/store/UserModule'
import { mount } from 'avoriaz'
import 'babel-polyfill'

Vue.use(Vuelidate)
Vue.use(Vuex)

describe('UserLogin.vue', () => {
  const username = 'moshe'
  let store, component, button

  beforeEach(() => {
    store = new Vuex.Store(UserModule)
  })

  function initComponent () {
    component = mount(UserLogin, { store })
    component.setData({ username })
  }

  function findButton () {
    button = component.find('button')[0]
  }

  it('should make login', () => {
    initComponent()
    findButton()
    button.trigger('click') // to login

    expect(store.state.user.username).to.equal(username)
    expect(store.state.connected).to.equal(true)
  })

  it('should make logout', () => {
    initComponent()
    findButton()
    button.trigger('click') // to login first
    button.trigger('click') // to logout

    expect(store.state.user).to.equal(null)
    expect(store.state.connected).to.equal(false)
  })
})
