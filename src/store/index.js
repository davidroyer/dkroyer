export const state = () => ({
  menuIsActive: false,
  sidebarOpen: false,
  testValue: 'Initial',
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Site Info', path: '/site-info' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ],
  examplesPage: { name: 'Examples', path: '/examples' }
})

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },

  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen
  },

  closeSidebar(state) {
    state.sidebarOpen = false
  },

  setMenuState(state, payload) {
    state.menuIsActive = !state.menuIsActive
  },

  setTestValue(state, payload) {
    state.testValue = payload
  },

  setDev(state, payload) {
    state.isDev = payload
  },

  addExamplePageToMenu(state) {
    state.navLinks.push(state.examplesPage)
  }
}

export const actions = {
  async promiseTest({ commit }, payload) {
    await delay(1200)
    commit('setTestValue', 'New Value')
  },

  nuxtServerInit({ commit, state }, { isDev }) {
    if (isDev) commit('addExamplePageToMenu')
  }
}

export const getters = {}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
