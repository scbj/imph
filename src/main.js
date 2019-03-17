import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    extraSmall: 576,
    small: 768,
    medium: 992,
    large: 1200,
    extraLarge: Infinity
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
