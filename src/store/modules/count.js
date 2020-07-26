import { COUNT_INCREMENT } from '../mutation-types'
export default {
    namespaced: true,
    state: {
        count: 0
      },
      getters: {
        doubleCount: (state, getters, rootState) => {
            console.log(state, getters, rootState)
            state.count * 2
        },
        addCount: state => num => state.count + num,
      },
      mutations: {
        [COUNT_INCREMENT](state, payload) {
          console.log(payload.num, 'num')
          state.count += payload.num
        }
      },
      actions: {
        countIncrement(context, payload) {
          return new Promise((resolve) => {
            setTimeout(() => {
              context.commit(COUNT_INCREMENT, payload)
              resolve()
            }, 1000)
          })
        }
      }
}