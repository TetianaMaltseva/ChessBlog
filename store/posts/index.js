import actions from './actions.js'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
// export default {
//  state () {
//    return {
//      count: 0
//    }
//  },
//  mutations: {
//    increment (state) {
//      state.count++
//    },
//    deccrement (state) {
//      state.count--
//    }
//  },
//  namespaced: true
// }
// getters: {
//  doubleCount (state) {
//    return state.count * 2
//  }
// },
// actions: {
//  setZero (context) {
//    console.log('setZero111111')
//    context.state.count = 0
//  }
