<template>
    <div class="child">
        {{ name }}
        <slot name="header"></slot>
        <slot></slot>
    </div>    
</template>
<script>
export default {
    props: {
        name: String
    }
}
</script>