# vue-router-transition

[![npm](https://img.shields.io/npm/v/vue-router-transition.svg?style=flat)](https://www.npmjs.com/package/vue-router-transition)
[![npm](https://img.shields.io/npm/dt/vue-router-transition.svg?style=flat)](https://www.npmjs.com/package/vue-router-transition)

A page transition plugin for vue-router [demo](http://vnot.me/vue-router-transition/)

## Usage

```js
...
import VueRouter from 'vue-router'
import VueRouterTransition from 'vue-router-transition'
...

// install router
Vue.use(VueRouter)
Vue.use(VueRouterTransition, VueRouter)

// in app.vue, apply directive `v-r-transition`
<router-view class="view" transition v-r-transition keep-alive></router-view>

// or

<router-view 
  class="view" 
  transition 
  v-r-transition="{forward: 'slideFromRightToLeft', back: 'slideFromLeftToRight'}" 
  keep-alive>
</router-view>

Vue.transition('slideFromRightToLeft', {})
Vue.transition('slideFromLeftToRight', {})
```

## Your CSS
```css
.view {
  transition: all .5s ease;
}

/* v-r-transition, default is {forward: 'forward', back: 'back'}*/
.forward-enter, .forward-leave {
  transform: translate3d(-100%, 0, 0);
}
.back-enter, .back-leave {
  transform: translate3d(100%, 0, 0);
}
```

## Page level transition
For page level transition, define custom field '$$routerTransition' in the route config
```js
'/message': {
  component: require('./views/subroutes/sr2.vue'),
  $$routerTransition: {
    forward: 'roll',
    back: 'roll'
  }
}
```