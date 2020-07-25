<template>
    <div class="student-list">
        <div>学生总人数：{{studentLength}}</div>
        <div>学员列表：</div>
        <ul>
            <li v-for="item in studentList" :key="item.id">姓名:{{item.name}} 年龄:{{item.age}}</li>
        </ul>
        <hr>
        <div>未成年学员列表：</div>
        <ul>
            <li v-for="(item, index) in studentJuveniles" :key="index">姓名:{{item.name}} 年龄:{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState(['studentList']),
        ...mapGetters(['studentLength', 'studentJuveniles'])
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 15px;
    }
</style>