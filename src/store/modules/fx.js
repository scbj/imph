import { make } from 'vuex-pathify'

export const state = {
  particlesColor: { r: 255, g: 255, b: 255 }
}

export const getters = {
  ...make.getters(state),

  particlesPaused (state, getters, rootState) {
    return !!rootState.backgroundMedia.video
  }
}

export const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
