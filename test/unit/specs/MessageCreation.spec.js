'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import { shallow } from 'avoriaz'
import { SEND_MESSGAE } from '@/store/ChatModule'

import MessageCreation from '@/components/MessageCreation'
import UserService from '@/services/UserService'
import 'babel-polyfill'

const ADD_MESSGAE = 'ADD_MESSGAE'

Vue.use(Vuelidate)
Vue.use(Vuex)

describe('MessageCreation.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        messages: [],
        user: UserService.getUserObj('moshe')
      },
      getters: {
        messages: state => state.messages,
        user: state => state.user
      },
      mutations: {
        [ADD_MESSGAE]: (state, {message}) => {
          state.messages.push(message)
        }
      },
      actions: {
        [SEND_MESSGAE]: ({commit}, { message }) => {
          const messageObj = UserService.getUserMessage(store.getters.user, message)
          commit({type: ADD_MESSGAE, message: messageObj})
        }
      }
    })
  })

  it('should add new message to chat store', () => {
    const message = 'this is the new message'
    const component = shallow(MessageCreation, { store })
    component.setData({ message })
    component.find('button')[0].trigger('click')

    expect(store.getters.messages.length).to.equal(1)
    expect(store.getters.messages[0].text).to.equal(message)
  })
})
