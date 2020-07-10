<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition name="left-right">
      <div class="box" v-if="show">Slide Demo</div>
    </transition>
    <transition name="up-down">
      <div class="box" v-if="show">Slide Demo</div>
    </transition>
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
  .left-right-enter {
    opacity: 0;
    transform: translateX(500px);
  }
  .left-right-enter-active {
    transition: all .5s;
  }
  .left-right-enter-to {
    opacity: 1;
    transform: translateX(0px);
  }
  .left-right-leave {
    opacity: 1;
    transform: translateX(0px);
  }
  .left-right-leave-active {
    transition: all .5s;
  }
  .left-right-leave-to {
    opacity: 0;
    transform: translateX(500px);
  }

  .up-down-enter,
  .up-down-leave-to {
    opacity: 0;
    transform: translateY(200px);
  }
  .up-down-enter-active,
  .up-down-leave-active {
    transition: all .5s;
  }
  .up-down-enter-to,
  .up-down-leave {
    opacity: 1;
    transform: translateY(0px);
  }
</style>