<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition mode="in-out">
        <div class="box" :key="keyName">Hello {{ keyName }}</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyName: 'mode'
    }
  },
  methods: {
    handleClick() {
      const isWorld = this.keyName === 'mode'
      this.keyName = isWorld ? 'in-out' : 'mode'
    }
  }
}
</script>
<style scoped>
  .demo {
      margin-left: 100px;
  }
  button {
    margin-bottom: 10px;
    display: block;
  }
  .box {
    position: absolute;
    display: inline-block;
    width: 200px;
    height: 30px;
    background-color: gray;
    color: #fff;
    line-height: 30px;
    text-align: center;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(80px);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all .5s;
  }
  .v-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .v-leave{
      opacity: 1;
  }
  .v-leave-to {
      opacity: 0;
      transform: translateX(-80px);
  }
</style>