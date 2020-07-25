<template>
  <div class="home">
    首页
    <button @click="$store.state.count++">点击</button>
    {{ storeCount }}
    {{ doubleCount }}
    {{ addCount(3) }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      // count: this.$store.state.count
      count: 100
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
      storeCount: 'count'
    }),
    ...mapGetters(['doubleCount', 'addCount'])
  },
  created() {
    console.log(this.$store)
  }
}
</script>