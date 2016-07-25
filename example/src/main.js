import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouterTransition from '../../index'
import VueTransitionAnimate from 'skyeye-vue-transition-animate'
import { configRouter } from './route-config'

// install router
Vue.use(VueRouter)
Vue.use(VueRouterTransition, VueRouter)
Vue.use(VueTransitionAnimate)

// create router
const router = new VueRouter({
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend(require('./app.vue'))
router.start(App, 'app')
