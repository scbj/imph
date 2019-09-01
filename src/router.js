import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
const NotFound = () => import('@/views/NotFound')
const Player = () => import('@/views/Player')
const TestFont = () => import('@/views/TestFont')
const Videos = () => import('@/views/Videos')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/dev/font', name: 'font', component: TestFont },
    {
      path: '/:category/videos',
      name: 'videos',
      component: Videos,
      children: [
        { path: ':id', name: 'player', component: Player }
      ]
    },
    { path: '*', name: '404', component: NotFound }
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
