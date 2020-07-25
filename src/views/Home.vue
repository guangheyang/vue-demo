<template>
  <div class="home">
    首页
    <button @click="handleClick">点击</button>
    {{ storeCount }}
    {{ doubleCount }}
    {{ addCount(3) }}
    {{ obj }}
    <!-- 利用:value -->
    <!-- <input type="text" :value="msg" @input="handleInput"> -->
    <!-- {{msg}} -->
    利用v-model
    <input type="text" v-model="msg">
    {{msg}}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { CHANGE_OBJ, UPDATE_MSG } from '@/store/mutation-types'
export default {
  data() {
    return {
      // count: this.$store.state.count
      count: 100
    }
  },
  methods: {
    // ...mapMutations(['countIncrement']),
    ...mapMutations(['COUNT_INCREMENT']),
    handleClick() {
      const num = Math.floor(Math.random() * 100)
      // this.$store.commit('countIncrement', {num})
      // 对象风格
      // this.$store.commit({
      //   type: 'countIncrement', 
      //   num
      // })
      // this.countIncrement()
      this.$store.commit('COUNT_INCREMENT', num)
      this.$store.commit(CHANGE_OBJ)
    },
    handleInput(e) {
      this.$store.commit(UPDATE_MSG, {value: e.target.value})
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
    // ...mapState(['count'])
    ...mapState({
      // storeCount: (state) => {
      //   return state.count + 10
      // }
      storeCount: 'count',
      obj: 'obj',
      // msg: 'msg'
    }),
    ...mapGetters(['doubleCount', 'addCount']),
    msg: {
      get() {
        return this.$store.state.msg
      },
      set(value) {
        this.$store.commit(UPDATE_MSG, {value})
      }
    }
  },
  created() {
    console.log(this.$store)
  }
}
</script>