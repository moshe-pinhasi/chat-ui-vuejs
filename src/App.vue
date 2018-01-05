<template>
  <div id="app">
    <div class="footer">
      <message-creation></message-creation>
    </div>
  </div>
</template>

<script>
import MessageCreation from './components/MessageCreation'

export default {
  components: {
    MessageCreation
  }
}
</script>

<style>

  #app {
    font-size: 14px;
  }

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
}



</style>
