import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // alias: '/' // 别名
  },
  {
    path: '/learn',
    components: {
      default: () => import('./views/Learn'),
      student: () => import('./views/Student')
    }
  },
  {
    path: '/student',
    component: () => import('./views/Student') 
  },
  {
    path: '/activity',
    component: () => import('./views/Activity'),
    // redirect: '/activity/academic', // 使用路径
    // redirect: { name: 'academic' }, // 使用命名
    redirect(to) { // 使用函数
      console.log(to)
      return {
        name: 'academic'
      }
    },
    children: [
      // 使用重定向就不要使用空字符串的形式
      // {
      //   path: '',
      //   component: () => import('./views/Academic')
      // },
      {
        path: '/activity/academic',
        name: 'academic',
        component: () => import('./views/Academic')
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('./views/Personal')
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('./views/Download')
      }
    ]
  },
  {
    path: '/about/:id',
    component: () => import('./views/About') 
  },
  {
    path: '/question/:id',
    name: 'question',
    // props: true,
    // 对象的方式
    // props: {
    //   id: 90878976
    // },

    // 函数式
    props: route => ({
      name: route.name,
      id: route.params.id
    }),
    component: () => import('./views/Question')
  }
]
export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})