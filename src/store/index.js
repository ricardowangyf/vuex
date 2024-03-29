import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    user,
    actions,
    getters,


    // state: {
    //     count: 0
    //   },
    //   mutations: {
    //     increment(state) {
    //       state.count++
    //     }
    //   }
})

