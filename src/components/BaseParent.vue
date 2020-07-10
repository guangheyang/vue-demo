<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition name="parent" :duration="4000">
      <div class="box" v-show="show">
          <transition name="son">
            <span v-show="show">parent</span>
          </transition>
      </div>
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
  .parent-enter,
  .parent-leave-to {
    transform: translateY(200px);
  }
  .parent-enter-active,
  .parent-leave-active {
    transition: all 3s;
  }
  .parent-enter-to,
  .parent-leave {
    transform: translateY(0px);
  }
  .son-enter,
  .son-leave-to {
    font-size: 12px;
  }
  .son-enter-active,
  .son-leave-active {
    transition: all 2s 2s;
  }
  .son-enter-to,
  .son-leave {
    font-size: 20px;
  }
</style>