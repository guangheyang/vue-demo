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
    component: () => import('./views/Student'),
    // beforeEnter (to, from, next) {
    //   console.log(to, from ,next)
    //   next()
    // }
  },
  {
    path: '/activity',
    component: () => import('./views/Activity'),
    redirect(to) {
      console.log(to)
      return {
        name: 'academic'
      }
    },
    children: [
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
    props: route => ({
      name: route.name,
      id: route.params.id
    }),
    component: () => import('./views/Question')
  }
]
const router =  new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})

router.beforeEach((to, from, next) => {
  // console.log(to, from, next())
  // if (to.path === '/student') {
    // next('/about')
  // } else {
    next()
    // 抛出异常
    // next(new Error('不让跳转'))
  // }
})

router.beforeResolve((to, from, next) => {
  console.log(to, from, next())
  // next()
})

// router.afterEach((to, from) => {

// })
// router.onError(err => {
//   console.log(err.message)
// })

export default router;