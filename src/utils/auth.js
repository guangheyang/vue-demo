function isLogin() {
    return document.cookie.includes('login=true')
}

function login() {
    const expiresDay = 7
    const date = new Date()
    date.setTime(date.getTime() + expiresDay * 3600 * 24 * 1000)
    document.cookie = `login=true;expires=${date.toGMTString()}`
}

function cancelLogin() {
    const date = new Date()
    date.setTime(date.getTime() - 10000)
    document.cookie = `login=true;expires=${date.toGMTString()}`
}
export default {
    isLogin,
    login,
    cancelLogin
}