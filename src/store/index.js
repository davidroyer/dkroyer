import site from '@/data'

export const state = () => ({
  menuIsActive: false,
  sidebarOpen: false,
  testValue: 'Initial',
  navLinks: site.navLinks,
  post: {},
  examplePageAdded: false
})

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },

  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen
  },

  setMenuState(state, payload) {
    state.menuIsActive = !state.menuIsActive
  },

  setCurrentPost(state, post) {
    state.post = post
  },

  setTestValue(state, payload) {
    state.testValue = payload
  },

  setDev(state, payload) {
    state.isDev = payload
  },

  addExamplePageToMenu(state) {
    if (!state.examplePageAdded) {
      state.navLinks.push({ name: 'Examples', path: '/examples' })
      state.examplePageAdded = true
    }
  }
}

export const actions = {
  async promiseTest({ commit }, payload) {
    await delay(1200)
    commit('setTestValue', 'New Value')
  }
}

export const getters = {
  currentPost: state => state.post
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
