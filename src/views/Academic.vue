<template>
    <div>
        <ul>
            <router-link
                tag='li'
                v-for="item in questionList"
                :key="item.id"
                :to="{ name: 'question', params: { id: item.id } }"
            >{{ item.title }}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questionList: []
        }
    },
    mounted() {
        console.log(this.$axios)
        this.$axios.get('/question').then(res => {
            this.questionList = res
        })
    }
}
</script>
<style scoped>
li {
  margin-bottom: 15px;
  cursor: pointer;
}
li:hover {
  text-decoration: underline;
  color: #3385ff;
}
</style>