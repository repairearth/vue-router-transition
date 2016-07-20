# vue-router-transition
A light weight page transition library for vue-router

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

To be continued...
