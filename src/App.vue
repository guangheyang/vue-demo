<script>
import BaseDemo from './components/BaseDemo'
export default {
  name: 'App',
  components: {
    BaseDemo
  },
  data() {
    return {
      name: 'hello',
      show: true,
      num: 3,
      content: 'v-model'
    }
  },
  methods: {
    vIf() {
      if(this.num === 1) {
        return <div>1</div>
      } else if(this.num === 2) {
        return <span>1</span>
      } else {
        return <p>{ this.num }</p>
      }
    },
    handleClick(num) {
      console.log(num)
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  render() {
     const scopedSlots = {
      scopedSlots: {
        default: props => <span>{ props.text }</span>,
      }
    };
    return (
      <div>
        <div>{ this.name }</div>
        <div domPropsInnerHTML="<a>a</a>"></div>
        <div domPropsTextContent="<a>a</a>"></div>
        <div v-show={ this.show }>show</div>
        { true && <div>v-if</div> }
        { this.show ? <div>div</div> : <span>span</span> }
        { this.vIf() }
        <ul>
          { [1, 2, 3].map(item => <li key={ item } ref="li" refInFor={true}>{ item }</li>) }
        </ul>
        <div on-click={ this.handleClick }>点我</div>
        <base-demo nativeOnClick={ this.handleClick }></base-demo>
        <div on-click={ () => this.handleClick(1) }>点击</div>
        <div class={['a', 'b']} style={ { fontSize: '14px', color: 'red' } }>v-bind</div>
        <input type="text" ref="input" v-model={ this.content } />
        { this.content }
        <base-demo>
          <div slot="default">默认插槽</div>
          <div slot="header">具名header插槽</div>
        </base-demo>
        <base-demo {...scopedSlots}>
        </base-demo>
      </div>
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
