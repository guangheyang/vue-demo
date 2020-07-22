<template>
    <div class="login">
        <button @click="login">{{ btnText }}</button>
    </div>
</template>

<script>
import auth from '../utils/auth'
export default {
    data() {
        return {
            isLogin: auth.isLogin()
        }
    },
    methods: {
        login() {
            if (this.isLogin) {
                auth.cancelLogin()
            } else {
                auth.login()
                this.goBack()
            }
            this.isLogin = !this.isLogin
        },
        goBack() {
            const isGoBack = window.confirm('登陆成功，要回到原来的页面吗？')
            if (isGoBack) {
                this.$router.go(-1)
            }
        }
    },
    computed: {
        btnText() {
            return this.isLogin ? '取消登录' : '登录'
        }
    }
}
</script>