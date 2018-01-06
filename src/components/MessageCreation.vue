<template>
  <div class="message-creation">
    <div class="message-creator">
      <user-login></user-login>
    </div>

    <div class="message-box">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <textarea class="form-control text-message" 
                    placeholder="Type a message" 
                    :disabled="!user"
                    v-model="message"
                    @blur="$v.message.$touch()"></textarea>
        </div>
        <div class="row message-actions">
          <button type="submit" class="btn btn-success col-2 form-control" :disabled="!user || !message">Send</button>
        </div>    
      </form>
    </div>
  </div>
</template>

<script>
'use strict'

import UserLogin from './UserLogin'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      message: null
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  validations: {
    message: {
      required
    }
  },
  methods: {
    onSubmit () {
      const message = Object.assign({}, this.user, {text: this.message})
      this.$socket.emit('spotim/chat', message)
      this.message = null
    }
  },
  components: {
    UserLogin
  }
}
</script>

<style scoped>
  .message-creation {
    width: 100%;
  }

  .message-creation .row {
    margin: 0;
  }

  .message-creation .row:not(:first-child) {
    margin-top: 15px;
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
  
</style>
