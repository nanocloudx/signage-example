import Vue from 'vue'
import Router from 'vue-router'
import Default from './views/Default.vue'
import Example1 from './views/Example1.vue'
import Example2 from './views/Example2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/example1',
      name: 'example1',
      component: Example1
    },
    {
      path: '/example2',
      name: 'example2',
      component: Example2
    },
    {
      path: '*',
      component: Default
    }
  ]
})
