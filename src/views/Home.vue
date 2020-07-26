<template>
  <div class="home">
    首页
    <button @click="handleClick">点击</button>
    {{ storeCount.count }}
    {{ doubleCount }}
    {{ addCount(3) }}
    {{ obj }}
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
      count: 100
    }
  },
  methods: {
    ...mapMutations('count', ['COUNT_INCREMENT']),
    handleClick() {
      const num = Math.floor(Math.random() * 100)
      this.$store.dispatch('count/countIncrement', {num}).then(() => {
        alert('count已增加')
      })
      this.$store.commit(CHANGE_OBJ)
    },
    handleInput(e) {
      this.$store.commit(UPDATE_MSG, {value: e.target.value})
    }
  },
  computed: {
    ...mapState('count', {
      storeCount: 'count',
      obj: 'obj',
    }),
    ...mapGetters('count', ['doubleCount', 'addCount']),
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