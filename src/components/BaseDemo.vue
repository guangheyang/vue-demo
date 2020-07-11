<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition-group>
      <div class="box" v-if="show" key="default">Hello World</div>
      <div class="box" v-if="show" key="name">Hello yang</div>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
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