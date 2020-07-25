import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    studentList: []
  },
  getters: {
    doubleCount: state => state.count * 2,
    addCount: state => num => state.count + num,
    studentLength: state => state.studentList.length,
    studentJuveniles: state => state.studentList.filter(item => item.age < 18)
  }
})

export default store