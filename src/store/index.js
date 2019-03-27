import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify, { make } from 'vuex-pathify'

import { getCategories } from '@/services/contentful'

Vue.use(Vuex)

const state = {
  categories: []
}

const getters = {
  hasCategories (state) {
    // Returns true when the array 'categories' contain at least one element
    return state.categories && state.categories.length > 0
  },

  activeCategory (state) {
    return index => state.categories.length > index && state.categories[index]
  }
}

const actions = {
  async fetchData ({ commit }) {
    const categories = await getCategories()
    if (categories) {
      commit('SET_CATEGORIES', categories.map(category => {
        // Delete the intermediate node created by Contentful
        const { videos, ...fields } = category
        return {
          ...fields,
          videos: videos && videos.map(video => video.fields)
        }
      }))
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
