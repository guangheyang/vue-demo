<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition
        :duration="1000"
        enter-active-class="animate__animated animate__tada v-enter-active"
        leave-active-class="animate__animated animate__tada v-leave-active"
    >
      <div class="box" v-if="show">Duration</div>
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
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(200px);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 10s;
  }
  .v-enter-to,
  .v-leave {
    opacity: 1;
    transform: translateY(0px);
  }
</style>