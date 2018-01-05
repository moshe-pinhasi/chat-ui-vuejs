<template>
  <div class="chat-room">
    <ul class="list-unstyled">
      <li v-for="(message, i) in messages" :key="i" class="left clearfix">
        <div class="message-bubble">
          <span class="chat-img" 
              :class="{'pull-left': !user || (message.username !== user.username),
                       'pull-right': user && (message.username === user.username)}">
            <image-avatar :user="{avatar: message.avatar}" image-size="sm"></image-avatar>
          </span>
          <div class="chat-body clearfix" :class="{'user-message': user && (message.username === user.username)}">
            <p class="username" :style="{color: message.color}">{{message.username}}</p>
            <p class="message">{{message.text}}</p>
          </div>
        </div>
      </li>
    </ul>    
  </div>
</template>

<script>
'use strict'

import ImageAvatar from './UserAvatar'

export default {
  computed: {
    user () {
      return this.$store.getters.user
    },
    messages () {
      return this.$store.getters.messages
    }
  },
  components: {
    ImageAvatar
  },
  updated () {
    var elem = this.$el
    elem.scrollTop = elem.scrollHeight
  }
}
</script>

<style scoped>

  .chat-room {
    width: 100%;
    height: calc(100% - 200px);
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .chat-room li {
    padding: 14px 14px 0;
  }

  .chat-room .chat-body {
    margin-left: 50px;
    padding: 10px;
    border-radius: 5px;
    background: #519def none repeat scroll 0 0;
  }

  .chat-room .chat-body.user-message {
    background-color: #67ef86;
    margin-left: 0;
    margin-right: 50px;
  }

  .chat-room .chat-body p {
    margin-bottom: 0;
  }
  
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }

</style>
