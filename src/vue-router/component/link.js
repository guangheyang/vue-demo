export default {
    props: {
        to: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: 'a'
        }
    },
    methods: {
        handleClick() {
            location.hash = this.to
        }
    },
    render(h) {
        const data = {}
        const to = this.to

        if (this.tag === 'a') {
            const href = '#' + to
            data.attrs = { href }
        } else {
            data.on = { click: this.handleClick }
        }
        return h(this.tag, data, this.$slots.default)
    }
}