<template>
  <div id="app">
    <button @click="show = true">点击</button>
    <AsyncCmp1 v-if="show" />
    <async-cmp-2 v-if="show" />
  </div>
</template>
<script>
// import AsyncCmp from './components/AsyncCmp'
export default {
  name: 'App',
  components: {
    AsyncCmp1: () => import(/* webpackChunkName: 'async' */ './components/AsyncCmp1'),
    AsyncCmp2: () => import(/* webpackChunkName: 'async' */ './components/AsyncCmp2')
  },
  data() {
    return {
      show: false
    }
  }
}
</script>