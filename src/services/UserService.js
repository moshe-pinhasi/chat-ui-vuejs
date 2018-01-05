'use strict'

import _ from 'lodash'

const avatars = [
  'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'
]

function getRandomAvatar () {
  return _.sample(avatars)
}

function getUserObj (username) {
  return {
    username,
    imgUrl: getRandomAvatar()
  }
}

export default {
  getUserObj
}
