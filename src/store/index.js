import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify, { make } from 'vuex-pathify'

import http from '@/http'

Vue.use(Vuex)

const state = {
  categories: [],
  videos: []
}

const actions = {
  async listCategories ({ commit }) {
    const { status, data } = await http.get('category')
    if (status === 200 && data) {
      commit('SET_CATEGORIES', data)
    }
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
  mutations,
  actions,
  plugins: [
    VuexPathify.plugin
  ]
})
