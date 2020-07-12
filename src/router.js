import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/learn',
    component: () => import('./views/Learn') 
  },
  {
    path: '/student',
    component: () => import('./views/Student') 
  },
  {
    path: '/activity',
    component: () => import('./views/Activity')
  },{
    path: '/about',
    component: () => import('./views/About') 
  }
]
export default new VueRouter({
  routes,
  // mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})