const HIS_KEY = '$$vue_router_history'
const sessionStorage = window.sessionStorage
const DIRECTION = {
  FORWARD: 'forward',
  BACK: 'back'
}

function VueRouterTransition (Vue, VueRouter, {indexPath = '/'} = {}) {
  const stackHistory = sessionStorage.getItem(HIS_KEY)
  let stack = [indexPath]

  if (stackHistory) {
    stack = JSON.parse(stackHistory)
  }

  const _ = Vue.util
  const routerViewDef = Vue.elementDirective('router-view')
  const originalRouterViewDef = _.extend({}, routerViewDef)
  const _onTransitionValidated = VueRouter.prototype._onTransitionValidated
  const transitionDef =
    // 0.12
    Vue.directive('_transition') ||
    // 1.0
    Vue.internalDirectives.transition

  // override vue-router and internal transition directive
  _.extend(VueRouter.prototype, {
    _onTransitionValidated (transition) {
      const { from, to } = transition
      const fromPath = from.path
      const toPath = to.path
      const fromStackIndex = stack.indexOf(fromPath)
      const toStackIndex = stack.indexOf(toPath)
      let direction

      if (toStackIndex > -1) {
        direction = toStackIndex > fromStackIndex ? DIRECTION.FORWARD : DIRECTION.BACK
      } else {
        direction = DIRECTION.FORWARD
        stack.push(toPath)
        sessionStorage.setItem(HIS_KEY, JSON.stringify(stack))
      }

      this.app.$$transitionInfo = {
        direction,
        routerTransition: transition.to.$$routerTransition
      }

      _onTransitionValidated.apply(this, arguments)
    }
  })

  _.extend(routerViewDef, {
    transition (target, cb) {
      const self = this
      const { vm } = this

      if (vm.$$routerTransition) {
        const { $$transitionInfo } = vm.$root
        const routerTransition = $$transitionInfo.routerTransition || vm.$$routerTransition

        vm.$$transition = routerTransition[$$transitionInfo.direction]

        Vue.nextTick(() => {
          originalRouterViewDef.transition.call(self, target, cb)
        })
      } else {
        originalRouterViewDef.transition.call(self, target, cb)
      }
    }
  })

  _.extend(transitionDef, {
    bind () {
      const { el, vm } = this
      if (el.__r_transition__) {
        /* istanbul ignore if */
        if (vm._defineMeta) {
          // 0.12
          vm._defineMeta('$$transition', el.__r_transition__.forward)
        } else {
          // 1.0
          _.defineReactive(vm, '$$transition', el.__r_transition__.forward)
        }
        this.literal = false
        this.expression = '$$transition'
      }
    }
  })

  // create `r-transition` directive
  Vue.directive('r-transition', {
    priority: 1101,
    update (value) {
      this.el.__r_transition__ = this.vm.$$routerTransition = _.isPlainObject(value) && value || {
        forward: DIRECTION.FORWARD,
        back: DIRECTION.BACK
      }
    }
  })
}

export default VueRouterTransition
