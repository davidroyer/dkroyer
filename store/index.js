import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import axios from '~plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false
    },
    // plugins: [createPersistedState()],
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      }
    },
    actions: {
    }
  })
}

export default createStore
