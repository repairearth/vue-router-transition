'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HIS_KEY = '$$vue_router_history';
var sessionStorage = window.sessionStorage;
var DIRECTION = {
  FORWARD: 'forward',
  BACK: 'back'
};

function VueRouterTransition(Vue, VueRouter) {
  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _ref$indexPath = _ref.indexPath;
  var indexPath = _ref$indexPath === undefined ? '/' : _ref$indexPath;

  var stackHistory = sessionStorage.getItem(HIS_KEY);
  var stack = [indexPath];

  if (stackHistory) {
    stack = JSON.parse(stackHistory);
  }

  var _ = Vue.util;
  var routerViewDef = Vue.elementDirective('router-view');
  var originalRouterViewDef = _.extend({}, routerViewDef);
  var _onTransitionValidated2 = VueRouter.prototype._onTransitionValidated;
  var transitionDef =
  // 0.12
  Vue.directive('_transition') ||
  // 1.0
  Vue.internalDirectives.transition;

  // override vue-router and internal transition directive
  _.extend(VueRouter.prototype, {
    _onTransitionValidated: function _onTransitionValidated(transition) {
      var from = transition.from;
      var to = transition.to;

      var fromPath = from.path;
      var toPath = to.path;
      var fromStackIndex = stack.indexOf(fromPath);
      var toStackIndex = stack.indexOf(toPath);
      var direction = void 0;

      if (toStackIndex > -1) {
        direction = toStackIndex > fromStackIndex ? DIRECTION.FORWARD : DIRECTION.BACK;
      } else {
        direction = DIRECTION.FORWARD;
        stack.push(toPath);
        sessionStorage.setItem(HIS_KEY, JSON.stringify(stack));
      }

      this.app.$$transitionInfo = {
        direction: direction,
        routerTransition: transition.to.$$routerTransition
      };

      _onTransitionValidated2.apply(this, arguments);
    }
  });

  _.extend(routerViewDef, {
    transition: function transition(target, cb) {
      var self = this;
      var vm = this.vm;
      var $$transitionInfo = vm.$root.$$transitionInfo;

      var routerTransition = $$transitionInfo.routerTransition || vm.$$routerTransition;

      vm.$$transition = routerTransition[$$transitionInfo.direction];

      Vue.nextTick(function () {
        originalRouterViewDef.transition.call(self, target, cb);
      });
    }
  });

  _.extend(transitionDef, {
    bind: function bind() {
      var el = this.el;
      var vm = this.vm;

      if (el.__r_transition__) {
        /* istanbul ignore if */
        if (vm._defineMeta) {
          // 0.12
          vm._defineMeta('$$transition', el.__r_transition__.forward);
        } else {
          // 1.0
          _.defineReactive(vm, '$$transition', el.__r_transition__.forward);
        }
        this.literal = false;
        this.expression = '$$transition';
      }
    }
  });

  // create `r-transition` directive
  Vue.directive('r-transition', {
    priority: 1101,
    update: function update(value) {
      this.el.__r_transition__ = this.vm.$$routerTransition = _.isPlainObject(value) && value || {
        forward: DIRECTION.FORWARD,
        back: DIRECTION.BACK
      };
    }
  });
}

exports.default = VueRouterTransition;