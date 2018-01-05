<template>
  <div class="message-creation container-fluid">
    <div class="row message-creator">
      <image-avatar class="col-1" :user="user" image-size="sm"></image-avatar>
      <input
        type="text"
        class="form-control col-3"
        id="username"
        placeholder="Username"        
        v-model="username">
      <button 
        type="button" 
        class="btn btn-primary col-2 form-control"
        @click="connectToggle">
        {{user ? 'Disconnect' : 'Connect' }}
      </button>
    </div>
    <div class="row message-box">
      <textarea class="form-control" placeholder="Type a message" :disabled="!user"></textarea>
    </div>

    <div class="row message-actions">
      <button type="submit" class="btn btn-success col-1 form-control" :disabled="!user">Send</button>
    </div>
  </div>
</template>

<script>
'use strict'

import ImageAvatar from './UserAvatar'
import { CONNECT, DISCONNECT } from '../store/UserModule'

export default {
  data () {
    return {
      username: null
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    connectToggle () {
      this.user ? this.disconnect() : this.connect()
    },
    connect () {
      this.$store.dispatch({type: CONNECT, username: this.username})
    },
    disconnect () {
      this.$store.dispatch({type: DISCONNECT})
    }
  },
  components: {
    ImageAvatar
  }
}
</script>

<style scoped>

  .message-creation {
    background: #f5f3f3 none repeat scroll 0 0;
    padding: 15px;
    width: 100%;
  }

  .message-creation .row {
    margin: 0;
  }

  .message-creation .row:not(:first-child) {
    margin-top: 15px;
  }

  .message-creation .form-control {
    font-size: 13px;
  }

  .message-creation textarea.form-control {
    height: 90px;
    padding: 10px;
    resize: none;
  }

  .message-actions {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    cursor: pointer;
  }

  .btn-primary  {
    margin: 0 0 0 10px;
  }

</style>
