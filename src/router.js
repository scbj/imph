import Vue from 'vue'
import Router from 'vue-router'

const HomeView = () => import('@/views/HomeView')
const NotFoundView = () => import('@/views/NotFoundView')
const VideosView = () => import('@/views/VideosView')
const TestFontView = () => import('@/views/TestFontView')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/dev/font', name: 'font', component: TestFontView },
    { path: '/:category/videos', name: 'videos', component: VideosView },
    { path: '*', name: '404', component: NotFoundView }
  ],
  scrollBehavior  (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
