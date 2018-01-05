'use strict'

import _ from 'lodash'

const avatars = [
  'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'
]

const colors = [
  '#175ed1',
  '#e55218',
  '#ab1adb',
  '#f98f04'
]

function getUserObj (username) {
  return {
    username,
    color: _.sample(colors),
    avatar: _.sample(avatars)
  }
}

export default {
  getUserObj
}
