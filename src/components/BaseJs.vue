<template>
  <div class="demo">
    <input type="text" v-model="query">
    <transition-group
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
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
  },
  methods: {
    beforeEnter(el) {
       el.style.opacity = 0
       el.style.height = 0
    },
    enter(el, done) {
        el.style.opacity = 1
        el.style.height = '24px'
        console.log(done)
    }
  }
}
</script>

<style scoped>
li {
  height: 24px;
}
</style>