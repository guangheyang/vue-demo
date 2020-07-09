<script>
export default {
    data() {
        return {
            value: 'haha'
        }
    },
    render(h) {
        const self = this
        return h('div', {
            attrs: {
                value: self.value
            },
            on: {
                input(e) {
                    self.value = e.target.value
                }
            }
        }, [h('input'),this.value])
    }
}
</script>