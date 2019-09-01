import { make } from 'vuex-pathify'

export const state = {
  particlesColor: { r: 255, g: 255, b: 255 }
}

export const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations
}
