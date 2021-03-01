/* eslint-disable no-console */
import { cmsNavFixer } from '@/utils'

export const state = () => ({
  drawer: false,
  isDev: null,
  nav: null,
  activeNavItem: {}
})

export const mutations = {
  setDev: (state, payload) => (state.isDev = payload),

  setNav: (state, payload) => (state.nav = payload),

  setDrawer: (state, payload) => (state.drawer = payload),

  setActiveNavItem: (state, payload) => (state.activeNavItem = payload)
}

export const actions = {
  nuxtServerInit({ commit, state }, { $cmsApi, isDev }) {
    const navArray = $cmsApi.get('site', 'nav')

    commit('setNav', cmsNavFixer(navArray))
    commit('setDev', isDev)
  }
}
