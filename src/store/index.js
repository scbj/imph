import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify, { make } from 'vuex-pathify'

import http from '@/http'

Vue.use(Vuex)

const state = {
  categories: [],
  videos: []
}

const getters = {
  hasCategories (state) {
    // Returns true when thearray 'categories' contain at least one element
    return state.categories && state.categories.length > 0
  }
}

const actions = {
  async listCategories ({ commit }) {
    const { status, data, ...response } = await http.get('category')
    if (status === 200 && data) {
      commit('SET_CATEGORIES', data)
    }
    return { status, data, ...response }
  },
  async listVideos ({ commit }, { categoryId }) {
    const { status, data } = await http.get(`category/${categoryId}/video`)
    if (status === 200 && data) {
      commit('SET_VIDEOS', data)
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
  plugins: [
    VuexPathify.plugin
  ]
})
