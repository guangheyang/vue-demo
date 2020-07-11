<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition>
        <div class="box" :key="keyName">Hello {{ keyName }}</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyName: 'key'
    }
  },
  methods: {
    handleClick() {
      const isWorld = this.keyName === 'key'
      this.keyName = isWorld ? 'Yang' : 'key'
    }
  }
}
</script>
<style scoped>
  button {
    margin-bottom: 10px;
  }
  .box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid red;
    color: red;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter-to,
  .v-leave {
    opacity: 1;
  }
</style>