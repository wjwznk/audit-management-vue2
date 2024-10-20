import Vuex from 'vuex'

const store = new Vuex.stroe({
  state: (state) => {count: 1},
  mutations: {
    increment(state){
      state.count++
    }
  },
  action: {
    increment(context){
      context.commit('increment')
    }
  }
})

export default store