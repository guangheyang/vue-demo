<template>
    <div>
        {{ msg }}
        <Son></Son>
    </div>
</template>

<script>
import Son from './Son'
export default {
    components: {
        Son
    },
    data() {
        return {
            msg: 'mag'
        }
    }
}
</script>

<style>
    div {
        background-color: red;
    }
</style>