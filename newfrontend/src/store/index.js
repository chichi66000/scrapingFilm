// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     month: new Date().toISOString().substr(0, 19).replace('T', ' '),
//   },
//   mutations: {
//     chooseMonth(state, newDate) {
//       state.month = newDate
//     },
//   },
//   actions: {
//     chooseMonth(context, newDate) {
//       context.commit('chooseMonth', newDate)
//     }
//   },
//   modules: {
//   }
// })


import {createStore} from 'vuex'

const store = createStore({

})

export default store