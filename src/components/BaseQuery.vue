<template>
  <div class="demo">
    <input type="text" v-model="query">
    <transition-group tag="ul">
      <li v-for="item in filterList" :key="item.id">{{ item.name }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: '',
      list: [{
        name: 'yang',
        id: 0
      }, {
        name: 'qq',
        id: 1
      }, {
        name: 'wang',
        id: 2
      }, {
        name: 'li',
        id: 3
      }]
    }
  },
  computed: {
    filterList() {
      return this.list.filter(item => item.name.includes(this.query))
    }
  }
}
</script>

<style scoped>
li {
  height: 24px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  height: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all .5s;
}
.v-enter-to,
.v-leave {
  opacity: 1;
  height: 24px;
}
.v-move {
  transition: transform .5s;
}
</style>