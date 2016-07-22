export function configRouter (router) {
  router.map({
    '/': {
      component: require('./views/home.vue')
    },
    '/page/1': {
      component: require('./views/page1.vue')
    },
    '/page/2': {
      component: require('./views/page2.vue')
    },
    '/page/3': {
      component: require('./views/page3.vue'),
      subRoutes: {
        '/': {
          component: require('./views/subroutes/sr1.vue')
        },
        '/wechat': {
          component: require('./views/subroutes/sr1.vue')
        },
        '/message': {
          component: require('./views/subroutes/sr2.vue'),
          $$routerTransition: {
            forward: 'roll',
            back: 'roll'
          }
        },
        '/explore': {
          component: require('./views/subroutes/sr3.vue')
        },
        '/news': {
          component: require('./views/subroutes/sr4.vue')
        }
      }
    },
    '/page/4': {
      component: require('./views/page4.vue')
    },
    '/page/5': {
      component: require('./views/page5.vue')
    }
  })
}
