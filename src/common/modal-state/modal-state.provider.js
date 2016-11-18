module.exports.load = function (mod) {
  mod.provider('modalState', modalState)
  //mod.run(interceptor)
}

///** @ngInject */
//function interceptor($rootScope, $state){
//
//    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//
//        if(toState.data.$previousState){
//            return
//        }
//
//        toState.data.$previousState = fromState
//        toState.data.$previousState.$stateParams = fromParams
//    })
//}

/**
 * Modal provider. Adds state which will open a modal.
 * Opens or closes modal on URL change.
 */

/** @ngInject */
function modalState($stateProvider) {

  var provider = this

  this.$get = function () {
    return provider
  }

  this.state = function (stateName, options) {

    var modalResult
    var modalInstance

    if (angular.isObject(stateName)) {
      options = stateName
      stateName = options.name
    }

    var resolve = options.resolve

    $stateProvider.state(stateName, {
      url: options.url,
      data: options.data || {},
      onEnter: openModal,

      /** @ngInject */
      onExit: function ($state) {
        if (modalInstance) {
          modalInstance.dismiss()

          modalInstance = modalResult = null
        }

        if ($state.$stateParams) delete $state.$stateParams
      }
    })

    /** @ngInject */
    function openModal($rootScope, $uibModal, $state, $stateParams) {

      $state.$stateParams = $stateParams

      options.resolve = resolve

      modalInstance = $uibModal.open(options)

      modalInstance.result
        .then(function (result) {
          modalResult = result
          $rootScope.$broadcast('statefulModalResult', result)
        })
        .catch(function (reason) {
          $rootScope.$broadcast('statefulModalDismissed', reason)
        })
        .finally(function () { // modal closes

          if ($state.$current.name === stateName) {
            //
            //var previousState = $state.current.data.$previousState
            //
            //if (previousState.name) {
            //    $state.go(previousState.name, previousState.$stateParams)
            //    delete $state.current.data.$previousState
            //}
            //else {
            $state.go('^') // go to parent state
            //}

          }

          modalInstance = modalResult = null
        })
    }

    return provider
  }
}

