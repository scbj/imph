import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify, { make } from 'vuex-pathify'

Vue.use(Vuex)

const state = {
  categories: [],
  videos: []
}

const actions = {

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
