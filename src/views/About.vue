<template>
  <div class="home">
    关于
    <div id="a">定位到a</div>
    <router-link tag="div" class="link" to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
  #a {
    margin-top: 1000px;
  }
  .link {
    margin-top: 1000px;
  }
</style>