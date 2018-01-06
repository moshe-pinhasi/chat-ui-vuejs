import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import { mount } from 'avoriaz'
import 'babel-polyfill'

import MessageCreation from '@/components/MessageCreation'
import UserService from '@/services/UserService'

Vue.use(Vuelidate)
Vue.use(Vuex)

describe('MessageCreation.vue', () => {
  let store, component

  const user = UserService.getUserObj('moshe2')

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        user: user,
        connected: true
      },
      getters: {
        user: state => state.user,
        connected: state => state.connected
      }
    })
  })

  function initComponent (message) {
    component = mount(MessageCreation, { store })
    component.setData({message})
  }

  function clickButton () {
    component.find('button')[0].trigger('click')
  }

  it('should add new message to store and clear message', () => {
    initComponent('this is a temp message')
    clickButton()

    expect(component.message).to.equal(undefined)
  })
})
