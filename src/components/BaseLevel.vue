
<script>
export default {
  name: 'HelloWorld',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render(createElement) {
    const vNode = createElement('h' + this.level, this.$slots.default)
    console.log(vNode)
    return vNode
  }
}
</script>

