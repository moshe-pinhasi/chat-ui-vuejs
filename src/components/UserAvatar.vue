<template>
  <div class="user-avatar">
    <img v-if="user && user.avatar" :src="user.avatar" alt="" class="circle" :class="size">
    <img v-else src="../assets/default-avatar.png" alt="" class="circle" :class="size">
  </div>
</template>

<script>
'use strict'

export default {
  props: ['user', 'imageSize'],
  created () {
    this.size = this.imageSize ? this.imageSize : 'sm'
  }
}
</script>

<style scoped>
  .circle {
    border-radius: 50%;
  }

  .sm {
    height: 30px;
    width: 30px;
  }

</style>
