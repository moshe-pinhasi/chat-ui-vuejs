<template>
  <div id="app">
    <div class="footer">
      <message-creation></message-creation>
    </div>
  </div>
</template>

<script>
import MessageCreation from './components/MessageCreation'
import { LOAD_USER } from './store/UserModule'

export default {
  components: {
    MessageCreation
  },
  created () {
    this.$store.dispatch({type: LOAD_USER})
  }
}
</script>

<style>

  #app {
    font-size: 14px;
  }

  .form-control {
    font-size: 13px;
  }

  .btn {
    cursor: pointer;
  }

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
  }



</style>
