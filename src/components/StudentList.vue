<template>
    <div class="student-list">
        <div>学院列表：</div>
        <ul>
            <li v-for="item in studentList" :key="item.id">姓名:{{item.name}} 年龄:{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState(['studentList'])
}
</script>

<style scoped>
    div {
        margin-bottom: 15px;
    }
</style>