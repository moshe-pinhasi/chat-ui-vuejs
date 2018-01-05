<template>
  <form @submit.prevent="connectToggle" class="user-login">
      <div class="row">
        <div class="col-1 col-sm-0"><image-avatar :user="user" image-size="sm"></image-avatar></div>
        <input
          type="text"
          class="form-control col-3"
          :class="{invalid: $v.username.$error}"
          @blur="$v.username.$touch()"
          id="username"
          placeholder="Username"
          :disabled="conncted"      
          v-model="username">
        
        <button 
          type="submit" 
          :disabled="!username || $v.username.$error"
          class="btn btn-primary col-3 col-sm-3 col-md-2 form-control">
          {{user ? 'Disconnect' : 'Connect' }}
        </button>
      </div>
      <p v-if="!$v.username.minLen" class="invalid-messgae">Username have to be at least {{ $v.username.$params.minLen.min }} characters</p>
    </form>
</template>

<script>
'use strict'
import ImageAvatar from './UserAvatar'
import { CONNECT, DISCONNECT } from '../store/UserModule'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: null
    }
  },
  computed: {
    user () {
      var user = this.$store.getters.user
      if (!user) return null

      this.username = user.username
      return user
    },
    conncted () {
      return this.$store.getters.conncted
    }
  },
  validations: {
    username: {
      required,
      minLen: minLength(3)
    }
  },
  methods: {
    connectToggle () {
      if (!this.username) return
      this.user ? this.disconnect() : this.connect()
    },
    connect () {
      this.$store.dispatch({type: CONNECT, username: this.username})
    },
    disconnect () {
      this.username = null
      this.$store.dispatch({type: DISCONNECT})
    }
  },
  components: {
    ImageAvatar
  }
}
</script>

<style scoped>
  .user-login .row {
    margin: 0;
  }

  .user-login {
    height: 55px;
  }

  .btn-primary  {
    margin: 0 0 0 10px;
  }
  
  .invalid {
    border: 1px solid red;
  }

  .invalid-messgae {
    padding-left: 52px;
    margin: 3px 0 0 0;
    color: red;
    font-size: 10px;
  }
  
</style>