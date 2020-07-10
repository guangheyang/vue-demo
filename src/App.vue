<template>
  <div id="app">
    <base-demo></base-demo>
    <base-slide></base-slide>
    <base-animate></base-animate>
    <base-class></base-class>
    <base-mix></base-mix>
    <base-duration></base-duration>
    <base-parent></base-parent>
    <base-appear></base-appear>
    <base-js></base-js>
  </div>
</template>
<script>
import BaseDemo from './components/BaseDemo'
import BaseSlide from './components/BaseSlide'
import BaseAnimate from './components/BaseAnimate'
import BaseClass from './components/BaseClass'
import BaseMix from './components/BaseMix'
import BaseDuration from './components/BaseDuration'
import BaseParent from './components/BaseParent'
import BaseAppear from './components/BaseAppear'
import BaseJs from './components/BaseJs'
export default {
  name: 'App',
  components: {
    BaseDemo,
    BaseSlide,
    BaseAnimate,
    BaseClass,
    BaseMix,
    BaseDuration,
    BaseParent,
    BaseAppear,
    BaseJs
  },
  provide() {
    return {
      name: 'yang'
    }
  },
  data() {
    return {
      name: 'hello',
      show: true,
      num: 3,
      content: 'v-model'
    }
  },
  methods: {
    handleClick() {
      console.log('click')
    }
  }
}
</script>
<style scoped>
  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>