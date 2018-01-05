<template>
  <div id="app">
    <div class="container chat-app">
      <chat-room></chat-room>

      <div class="footer">
        <message-creation></message-creation>
      </div>
    </div>
    
  </div>
</template>

<script>
import MessageCreation from './components/MessageCreation'
import ChatRoom from './components/ChatRoom'
import { LOAD_USER } from './store/UserModule'

export default {
  components: {
    ChatRoom,
    MessageCreation
  },
  created () {
    this.$store.dispatch({type: LOAD_USER})
  }
}
</script>

<style>

  #app {
    height: 100vh;
  }

  .chat-app {
    position: relative;
    height: 100%;
    background: #f5f3f3 none repeat scroll 0 0;
    padding: 15px;
    font-size: 13px;
  }

  .form-control {
    font-size: 13px;
  }

  .btn {
    cursor: pointer;
  }

  .footer {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0;
  }
</style>
