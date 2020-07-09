<script>
// <template>
//   <div>
//     <slot name="header"></slot>
//     demo
//     <slot></slot>
//   </div>
// </template>
// <template>
//   <div class="demo">
//     <slot :text="'HelloWorld'"></slot>
//   </div>
// </template>
export default {
  render () {
    return (
      <div>
        { this.$slots.header }
        demo
        { this.$slots.default}

        <div>{ this.$scopedSlots.default({
             text: '作用域插槽',
        }) }</div>
      </div>
    )
  },
  mounted () {
    console.log( this.$scopedSlots )
  }
}
</script>