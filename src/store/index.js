import Vue from 'vue'
import Vuex from 'vuex'

import { COUNT_INCREMENT, CHANGE_OBJ, UPDATE_MSG } from './mutation-types'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    studentList: [],
    obj: {a: 1},
    msg: ''
  },
  getters: {
    doubleCount: state => state.count * 2,
    addCount: state => num => state.count + num,
    studentLength: state => state.studentList.length,
    studentJuveniles: state => state.studentList.filter(item => item.age < 18)
  },
  mutations: {
    [COUNT_INCREMENT](state, payload) {
      console.log(payload.num, 'num')
      state.count += payload.num
    },
    [CHANGE_OBJ](state) {
      Vue.set(state.obj, 'b', 10)
    },
    [UPDATE_MSG](state, {value}) {
      state.msg = value
    }
  },
  actions: {
    countIncrement(context, payload) {
      console.log(payload, 'payload')
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit(COUNT_INCREMENT, payload)
          resolve()
        }, 1000)
      })
      // setTimeout(() => {
      //   context.commit(COUNT_INCREMENT, payload)
      // }, 1000)
    }
  }
})

export default store