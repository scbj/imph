import { make } from 'vuex-pathify'

export const state = {
  activeCategory: null
}

export const getters = {
  ...make.getters(state),

  activeBackgroundVideo (state) {
    return state.activeCategory && state.activeCategory.backgroundVideo.url
  }
}

export const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
