<template>
  <div id="app">
    <BaseLevel :level="1">我是h1</BaseLevel>
    <BaseLevel :level="2">我是h2</BaseLevel>
    <BaseLevel :level="3">我是h3</BaseLevel>
    <BaseLevel :level="4">我是h4</BaseLevel>
    <BaseLevel :level="5">我是h5</BaseLevel>
    <BaseLevel :level="6">我是h6</BaseLevel>
    <BaseData></BaseData>
    <BaseSlots v-slot="slotProps">
    {{ slotProps.text }}
    </BaseSlots>
  </div>
</template>

<script>
import BaseLevel from './components/BaseLevel'
import BaseData from './components/BaseData'
import BaseSlots from './components/BaseSlots'

export default {
  name: 'App',
  components: {
    BaseLevel,
    BaseData,
    BaseSlots
  },
  // 模拟插槽
  render(h) {
    return h('div', {
      id: 'app'
    }, [
      h('base-slots', {
        scopedSlots: {
          default: function(props) {
            return props.text
          }
        }
      })
    ])
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
