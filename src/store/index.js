import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify, { make } from 'vuex-pathify'

import * as modules from '@/store/modules'

Vue.use(Vuex)

const state = {
  categories: []
}

const getters = {
  hasCategories (state) {
    // Returns true when the array 'categories' contain at least one element
    return state.categories && state.categories.length > 0
  },

  particlesPaused (state, getters, rootState, rootGetters) {
    return !!rootGetters['home/activeCategory']
  }
}

const actions = {
  async fetchCategories ({ commit }) {
    try {
      const response = await fetch('/.netlify/functions/category')
      const data = await response.json()
      if (data) {
        commit('SET_CATEGORIES', data.sort((a, b) => a.order - b.order))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  ...make.mutations(state)
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    VuexPathify.plugin
  ]
})
