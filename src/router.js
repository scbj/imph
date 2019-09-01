import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: ':category/videos',
        name: 'videos',
        component: () => import('@/views/Videos'),
        children: [
          {
            path: ':id',
            name: 'player',
            component: () => import('@/views/Player')
          }
        ]
      },
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '*',
    name: '404',
    component: () => import('@/views/NotFound')
  }
]

function scrollBehavior (to, from, savedPosition) {
  if (to.name === 'videos' && from.name !== 'player') {
    return { x: 0, y: 0 }
  }

  return null
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})
