import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import VideosView from '@/views/VideosView'
import TestFontView from '@/views/TestFontView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/font', name: 'font', component: TestFontView },
    { path: '/:category/videos', name: 'videos', component: VideosView }
  ]
})
