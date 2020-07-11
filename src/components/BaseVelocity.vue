<template>
  <div class="demo">
    <button @click="show = !show">click</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="box" v-if="show">Velocity</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0;
    },
    enter (el, done) {
        console.log(el, done)
        // Velocity(el, { opacity: 1 }, { duration: 500 })
        // Velocity(el, { rotateZ: 10 }, {duration: 300 })
        // Velocity(el, { rotateZ: -10 }, {duration: 300 })
        // Velocity(el, { rotateZ: 0 }, {duration: 300, comlete: done })
    },
    beforeLeave(el) {
        el.style.translateOrigin = 'left'
    },
    leave(el, done) {
        console.log(el, done)
        // Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        // Velocity(el, { rotateZ: '100deg' }, { duration: 600, loop })
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
  margin-bottom: 10px;
  line-height: 100px;
  text-align: center;
  border: 1px solid red;
  color: red;
}
</style>