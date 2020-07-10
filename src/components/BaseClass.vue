<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutDown"
    >
      <div class="box" v-if="show">Class</div>
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
</style>