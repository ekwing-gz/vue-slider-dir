import Vue from 'vue'
import VueRouter from 'vue-router'
import route1 from './components/route1'
import route2 from './components/route2'
import route3 from './components/route3'
import route4 from './components/route4'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/route1'
    }, {
      path: '/route1',
      component: route1
    }, {
      path: '/route2',
      component: route2
    }, {
      path: '/route3',
      component: route3
    }, {
      path: '/route4',
      component: route4
    }
  ]
})

export default router