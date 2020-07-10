<template functional>
  <div>
    {{ props.level }}
  </div>
</template>
<script>
export default {
  functional:true,
  inject: ['name'],
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render (h, context) {
    console.log(context)
    const { props, slots, scopedSlots, data, parent, listeners, injections, children } = context
    const tag = 'h' + props.level
    console.log(data, 'data')
    console.log(parent, 'parent')
    console.log(listeners, data.on, 'listeners')
    console.log(injections, 'injections')
    console.log(children, 'children')
    return (
    <tag>
      { slots().default }
      { scopedSlots.default({ text:"默认插槽" }) }
      { injections.name }
      <div>{children}</div>
    </tag>
  )
  }
}
</script>