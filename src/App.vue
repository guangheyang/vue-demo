<template>
  <div id="app">
    <base-level :level="1" @click="handleClick">
      <template #default="{ text }">
        {{text}}
        标题
      </template>
      <div>div</div>
      <p>p</p>
    </base-level>
  </div>
</template>
<script>
import BaseLevel from './components/BaseLevel'
export default {
  name: 'App',
  components: {
    BaseLevel
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
