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
    // countIncrement(state, { num }) {
    //   state.count += num
    // }
    
    // // 对象风格
    // countIncrement(state, payload) {
    //   state.count += payload.num
    // }

    [COUNT_INCREMENT](state, num) {
      state.count += num
    },
    [CHANGE_OBJ](state) {
      Vue.set(state.obj, 'b', 10)
      // state.obj = { ...state.obj, b: 1 }
    },
    [UPDATE_MSG](state, {value}) {
      state.msg = value
    }
  }
})

export default store