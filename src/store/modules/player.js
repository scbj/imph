import { make } from 'vuex-pathify'

import router from '@/router'

export const state = {
  activeVideo: null,
  opened: false,
  playbackState: ''
}

export const getters = make.getters(state)

export const actions = {
  play ({ commit }, video) {
    commit('SET_ACTIVE_VIDEO', video)
    router.push({ name: 'player', params: { id: video.youTubeId } })
  }
}

export const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
