<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition
        appear
        appear-active-class="animate__animated animate__swing"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__tada"
    >
      <div class="box" v-if="show">Appear</div>
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