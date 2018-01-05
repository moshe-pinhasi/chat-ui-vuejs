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
  '#17d19f',
  '#e5e219',
  '#e55218',
  '#ab1adb'
]

function getUserObj (username) {
  return {
    username,
    color: _.sample(colors),
    imgUrl: _.sample(avatars)
  }
}

export default {
  getUserObj
}
