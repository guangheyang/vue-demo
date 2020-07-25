<template>
  <div class="home">
    首页
    <button @click="$store.state.count++">点击</button>
    {{ storeCount }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    })
  },
  created() {
    console.log(this.$store)
  }
}
</script>