import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {
        plus (state) {
            if(state.count < 10) state.count++
        },
        minus (state) {
            if(state.count > 0) state.count--
        },
        setCount(state, value){
            state.count = value
        }
    },
    actions: {
        plusAction ({commit}){
            commit('plus')
        },
        minusAction ({commit}){
            commit('minus')
        }
    }
})

export default store