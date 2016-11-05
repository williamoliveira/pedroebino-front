import controller from './controller.js'
import template from './template.html'

import requestsModule from './requests/module'
import trucksModule from './trucks/module'
import driversModule from './drivers/module'

export default angular
  .module('app.states.index', [
    requestsModule.name,
    driversModule.name,
    trucksModule.name,
  ])
  .config(config)

/** @ngInject */
function config($stateProvider) {
  
  $stateProvider.state({
    name: 'dashboard',
    abstract: true,
    template: template,
    controller: controller,
    controllerAs: 'dashboardCtrl',
    data: {
      permissions: {
        only: ['AUTHENTICATED'],
        redirectTo: 'outside.login'
      }
    }
  })
  
  $stateProvider.state({
    name: 'dashboard.home',
    url: '/',
    /** @ngInject */
    onEnter($state, $timeout){
      $timeout(() => $state.go('dashboard.requests'))
    }
  })
  
}