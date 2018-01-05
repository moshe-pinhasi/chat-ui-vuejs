<template>
  <div class="chat-room">
    <ul class="list-unstyled">
      <li v-for="(message, i) in messages" :key="i" class="left clearfix">
        <span class="chat-img pull-left">
          <image-avatar :user="user" image-size="sm"></image-avatar>
        </span>
        <div class="chat-body clearfix">
          <p class="username" :style="{color: user.color}">{{user.username}}</p>
          <p class="message">{{message}}</p>
        </div>
      </li>
    </ul>    
  </div>
</template>

<script>
'use strict'

import ImageAvatar from './UserAvatar'

export default {
  data () {
    return {
      messages: ["moshe", "moshe1", "moshe", "moshe1", "moshe", "moshe1", "moshe", "moshe1", "moshe", "moshe1"]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  components: {
    ImageAvatar
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
    background: #fbf9fa none repeat scroll 0 0;
    padding: 10px;
  }

  .chat-room .chat-body p {
    margin-bottom: 0;
  }
  
</style>
