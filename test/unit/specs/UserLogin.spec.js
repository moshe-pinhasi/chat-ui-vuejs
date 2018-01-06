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
  let store, component

  beforeEach(() => {
    store = new Vuex.Store(Object.assign(UserModule))
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
    clickButton()

    expect(store.state.user).to.equal(null)
    expect(store.state.connected).to.equal(false)
  })
})
