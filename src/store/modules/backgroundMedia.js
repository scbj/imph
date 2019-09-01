import { make } from 'vuex-pathify'

export const state = {
  video: ''
}

export const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations
}
