<template>
  <div class="demo">
    <button @click="handleClick">Click</button>
    <transition mode="in-out">
        <component :is="cmpName"></component>
    </transition>
  </div>
</template>
<script>
import demo1 from './component1'
import demo2 from './component2'
export default {
  components: {
    demo1,
    demo2
  },
  data() {
    return {
      cmpName: 'demo1'
    }
  },
  methods: {
    handleClick() {
      const isWorld = this.cmpName === 'demo1'
      this.cmpName = isWorld ? 'demo2' : 'demo1'
    }
  }
}
</script>
<style scoped>
  .demo {
      margin: 50px;

  }
  button {
    margin-bottom: 10px;
    display: block;
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