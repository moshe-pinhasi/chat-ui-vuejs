import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'
import 'babel-polyfill'

import ChatRoom from '@/components/ChatRoom'
import UserService from '@/services/UserService'

const ADD_MESSGAE = 'ADD_MESSGAE'
const INCOMIG_MESSAGE = 'INCOMIG_MESSAGE'

Vue.use(Vuex)

describe('ChatRoom.vue', () => {
  let store, component

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        messages: []
      },
      getters: {
        messages: state => state.messages
      },
      mutations: {
        ADD_MESSGAE: (state, message) => {
          state.messages.push(message)
        }
      },
      actions: {
        INCOMIG_MESSAGE: (context, message) => {
          context.commit(ADD_MESSGAE, message)
        }
      }
    })
  })

  it('should match the message in store to messages list', () => {
    const user = UserService.getUserObj('moshe')
    const message = UserService.getUserMessage(user, 'chat message')
    store.dispatch(INCOMIG_MESSAGE, message)

    component = shallow(ChatRoom, { store })

    const listElements = component.find('.chat-room li')
    const usernameElement = component.find('.chat-room li .username')[0]
    const messageElement = component.find('.chat-room li .message')[0]

    expect(listElements.length).to.equal(1)
    expect(usernameElement.text()).to.equal(store.getters.messages[0].username)
    expect(messageElement.text()).to.equal(store.getters.messages[0].text)
  })
})
