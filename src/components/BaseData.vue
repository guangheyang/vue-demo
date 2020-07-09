<script>
import BaseChild from './BaseChild'
import BaseIfFor from './BaseIfFor'
import BaseModel from './BaseModel'
export default {
    components: {
        BaseChild,
        BaseIfFor,
        BaseModel
    },
    data() {
        return {
            content: 'hsh'
        }
    },
    directives: {
        slice: {
            bind (el, binding, vnode) {
                const vm = vnode.context;
                let { value, expression, arg, modifiers } = binding;
                if(modifiers.number) {
                    value = value.replace(/[^0-9]/g, '');
                }
                el.value = value.slice(0, arg);
                vm[expression] = value.slice(0, arg);
                el.oninput = function () {
                    let inputVal = el.value;
                    if(modifiers.number) {
                        inputVal = inputVal.replace(/[^0-9]/g, '');
                    }
                    el.value = inputVal.slice(0, arg);
                    vm[expression] = inputVal.slice(0, arg);
                }
            },
        // update (el, binding, vnode) {
        //     const vm = vnode.context;
        //     let { value, arg, expression, modifiers } = binding;
        //     if(modifiers.number) {
        //     value = value.replace(/[^0-9]/g, '');
        //     }
        //     el.value = value.slice(0, arg);
        //     vm[expression] = value.slice(0, arg);
        // },
        }
    },
    render(createElement) {
        return createElement('div', {
            class: {
                foo: true,
                bar: false
            },
            style: {
                color: 'red',
                fontSize: '14px'
            },
            attrs: {
                id: 'data',
                index: 1
            }
        }, ['div',
            createElement('base-child', {
                props: {
                    name: 'base-child组件'
                },
                nativeOn: {
                    click: function() {
                        console.log('base-child click')
                    }
                }
            }, [
                createElement('p', {
                    slot: 'default'
                }, '默认插槽'),
                createElement('div', {
                    slot: 'header'
                }, '插槽')
            ]),
            createElement('p', {
                domProps: {
                    innerHTML: '<span>innerHTML</span>'
                },
                on: {
                    click: function() {
                        console.log('p click')
                    }
                }
            }),
            createElement('input', {
                directives: [
                    {
                        name: 'slice',
                        value: this.content,
                        expression: 'content',
                        arg: 5,
                        modifiers: {
                            number: true
                        },
                    }
                ]
            }),
            this.content,
            createElement('base-if-for', {
                props: {
                    items: [1, 2, 3, 4, 5]
                }
            }),
            createElement('base-model', {
                props: {
                    items: [1, 2, 3, 4, 5]
                }
            })
        ])
    }
}
</script>