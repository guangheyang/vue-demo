<template>
  <div id="app">
    <button @click="handleClick">点击</button>
    <base-demo>
      <div v-if="show" key="default">hello world</div>
      <div v-else key="name">hello yang</div>
    </base-demo>
  </div>
</template>
<script>
import BaseDemo from './components/BaseDemo'
export default {
  name: 'App',
  components: {
    BaseDemo
  },
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