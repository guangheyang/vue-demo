<template>
  <div class="student">
    学员展示
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from ,next) {
    // next()

    next(vm => {
      console.log(vm.name)
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  data() {
    return {
      name: 'yang'
    }
  }
}
</script>
